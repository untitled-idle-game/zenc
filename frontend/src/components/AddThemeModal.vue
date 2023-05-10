<template>
  <div class="modal fade" :id="id" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add quote</h5>
      </div>

      <div class="modal-body">
        <!-- Form for add modal -->
        <div class="form-group">
          <label for="inputName">Name</label> <!-- for is an accessibility thing -->
          <input type="text" class="form-control" placeholder="Theme Name" id="inputName" v-model="inputName"/>
        </div>
        <div class="form-group">
          <label for="inputName">Background</label> <!-- for is an accessibility thing -->
          <input type="file" class="form-control" placeholder="Theme Name" id="inputBackground" v-on:change="inputBackgroundFileChanged"/>
        </div>
        <div class="form-group">
          <label for="inputFgColor">Foreground Color</label>
          <input type="text" class="form-control" id="inputFgColor" placeholder="" v-model="inputFgColor"/>
          <span class="bmd-help">This is an </span>
          <label for="inputAccentColor">Accent Color</label>
          <input type="text" class="form-control" id="inputAccentColor" placeholder="" v-model="inputAccentColor">
          <span class="bmd-help"></span>
        </div>
        <div class="form-group">
          
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">CANCEL</button>
        <button @click.left="addTheme" type="button" class="btn btn-primary" data-dismiss="modal">SAVE</button>
      </div>

    </div>
  </div>
</div>
</template>
<script>

import globals from './globals.js';
export default {
    name: "AddThemeModal",
    props: ["id"],
    data() {
        return {
            inputName: "Untitled Theme",
            inputBackground: null,
            inputFgColor: "",
            inputAccentColor: "",
        }
    },
    methods: {
        inputBackgroundFileChanged(event) {
            console.log(event);
        },
        addTheme() {
            console.log("TODO: add theme");
            globals.themeManager.add(
                this.inputName,
                this.inputFgColor,
                this.inputAccentColor,
            )
        }
    },
    mounted() {
        
    }
};
</script>