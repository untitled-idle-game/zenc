<!-- TODO: Eric: We need a database or atleast a JSON template I can use, since the themes are user uploaded I can't simply hard code theme screens. --->
<script>
import NavigationBar from './NavigationBar.vue';
import AddThemeModal from './AddThemeModal.vue';
import EditThemeModal from './EditThemeModal.vue';
import DeleteThemeModal from './DeleteThemeModal.vue';

import globals from './globals.js';
// let themes = [
//       {
//         "name": "Dark Mode",
//         "imageURL": "https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
//         "creator": "Eric",
//         "fgColor": "#FFFFFF",
//         "accentColor": "#000000",
//         "lastTouched": "2012-04-23T18:25:43.511Z",
//         "price": 2
//       },
//       {
//         "name": "Ow my eyes",
//         "imageURL": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
//         "creator": "Eric",
//         "fgColor": "#FF0000",
//         "accentColor": "#00FF00",
//         "lastTouched": "2012-05-23T18:25:43.511Z",
//         "price": 1
//       }
//     ];
export default {
    name: "ThemeStoreScreen",
    data() {
      return {
        count: 0
      }
    },
    mounted() {
      globals.themeManager.beginListening(this.loadPage);
      /* eslint-disable */
      $("#editThemeModal").on("show.bs.modal", (event) => {
        const themeId = Number.parseInt(event.relatedTarget.dataset.editId);
        const theme = globals.themeManager.getThemeAtIndex(themeId);
        const {update} = this.$refs.editThemeModal;
        update(theme.id, theme.name, theme.fgColor, theme.accentColor, theme.price);
      }).bind(this);
      $("#deleteThemeModal").on("show.bs.modal", (event) => {
        const themeId = Number.parseInt(event.relatedTarget.dataset.deleteId);
        const theme = globals.themeManager.getThemeAtIndex(themeId);
        const {update} = this.$refs.deleteThemeModal;
        update(theme.id);
      }).bind(this);
    },
    methods: {
      async loadPage() {
        document.getElementById("themeBoxes").innerHTML="";
        for (let i = 0; i < globals.themeManager.length; i++) {
          let theme = globals.themeManager.getThemeAtIndex(i);
          let themeImage = ""
          await globals.storageManager.getImageUrl(theme.id).then((imageURL) => {
            themeImage = `<div data-v-8f2b0d58 class = "themebox" style = "background-image: url(${imageURL}); top:${100+400*i}px">`
          })
          .catch(() => {
            // TODO: Eric - include what happens when the image is not found
            themeImage = `<div data-v-8f2b0d58 class = "themebox" style = "background: ${theme.fgColor}; top:${100+400*i}px">`
          });
          let editanddeleteButton = `<button class = "btn bmd-btn-fab editButtons material-symbols-outlined" id = "editButton${i}" data-edit-id="${i}" data-toggle = "modal" data-target="#editThemeModal">edit</button><button class = "btn bmd-btn-fab deleteButtons material-symbols-outlined" id = "deleteButton${i}" data-delete-id="${i}" data-toggle = "modal" data-target="#deleteThemeModal">delete</button>`;
          if (theme.creator!=globals.authManager.uid) {
            editanddeleteButton = "";
          }
          let themeString = `${themeImage}
              <p data-v-8f2b0d58 class = "name" style = "color: ${theme.fgColor}; text-shadow: -1px 1px 2px ${theme.accentColor},
            1px 1px 2px ${theme.accentColor},
            1px -1px 0 ${theme.accentColor},
            -1px -1px 0 ${theme.accentColor};">${theme.name}</p>
              <p data-v-8f2b0d58 class = "author" style = "color: ${theme.fgColor}; text-shadow: -1px 1px 2px ${theme.accentColor},
            1px 1px 2px ${theme.accentColor},
            1px -1px 0 ${theme.accentColor},
            -1px -1px 0 ${theme.accentColor}; text-shadow: -1px 1px 2px ${theme.accentColor},
            1px 1px 2px ${theme.accentColor},
            1px -1px 0 ${theme.accentColor},
            -1px -1px 0 ${theme.accentColor};">by ${theme.creator}</p>
              <p data-v-8f2b0d58 class = "purchase" style = "color: ${theme.fgColor}; text-shadow: -1px 1px 2px ${theme.accentColor},
            1px 1px 2px ${theme.accentColor},
            1px -1px 0 ${theme.accentColor},
            -1px -1px 0 ${theme.accentColor};">(${theme.price} ZP)</p>
            ${editanddeleteButton}
          </div>`;
          document.getElementById("themeBoxes").innerHTML+=themeString;
        }
    }
    // add() {
    //   let id = themes.length + 1;
    //   themes.push({
    //     "name": "Ow my eyes "+ id,
    //     "imageURL": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    //     "creator": "Eric",
    //     "fgColor": "#FF0000",
    //     "accentColor": "#00FF00",
    //     "lastTouched": "2012-05-23T18:25:43.511Z",
    //     "price": 1
    //   })
    //   this.loadPage();
    // },
    },
    components: {
    NavigationBar,
    AddThemeModal,
    EditThemeModal,
    DeleteThemeModal
}
}
</script>
<script setup>
  // updateEdit("asdadeadea", "", "", "", "#fffff", 0);
  // function updateEdit(editid, inputName, imagesString, inputFgColor, inputAccentColor, inputPrice) {
  //   console.log("hello");
  //   EditThemeModal.methods.update(editid, inputName, imagesString, inputFgColor, inputAccentColor, inputPrice);
  // }
</script>
<template>
  <NavigationBar/>
  <AddThemeModal id="addThemeModal"/>
  <EditThemeModal id="editThemeModal" ref = "editThemeModal"/>
  <DeleteThemeModal id="deleteThemeModal" ref = "deleteThemeModal"/>
  <div id = "themeBoxes"></div>
  <button class = "btn bmd-btn-fab" id="addButton" data-toggle="modal" data-target="#addThemeModal">+</button>
</template>

<style scoped>
  .themebox {
    position:absolute;
    justify-self: center;
    width:80%;
    height: 300px;
    left:10%;
    border-radius: 30px 30px 30px 30px;
    top:10%;
    text-align: center;
  }
  .name {
    color:white;
    margin-top: 7%;
    margin-bottom: 0%;
    font-size: xx-large;
  }
  .author {
    color:white;
    margin-top: 0%;
    font-size: x-large;
  }
  .purchase {
    color:white;
    margin-top: 0%;
    font-size: xx-large;
  }
  #themeBoxes {
    overflow-x: hidden;
    overflow-y: auto;
  }
  #addButton {
    position: fixed;
    right: 10px;
    bottom: 10px;
    background: navy;
    z-index: 999;
    color:white;
  }
</style>