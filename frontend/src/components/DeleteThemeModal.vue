<template>
  <div class="modal fade" :id="id" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" :id="id+'inputTitle'">Are you sure you want to delete this theme?</h5>
      </div>

      <div class="modal-body">
        <!-- Form for edit modal -->
        <div class="container-fluid">
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">CANCEL</button>
        <button @click.left="deleteTheme" type="button" class="btn btn-primary" data-dismiss="modal">DELETE</button>
      </div>

    </div>
  </div>
</div>
</template>
<script>

import globals from './globals.js';
import {toRefs} from 'vue';
export default {
    name: "DeleteThemeModal",
    props: ["id"],
    data(props) {
        const { id } = toRefs(props);
        return {
            propid: id.value,
            deleteid:""
        }
    },
    methods: {
        inputBackgroundFileChanged(event) {
            this.inputBackground = event.target.files[0];
        },
        deleteTheme() {
            globals.themeManager.delete(
                this.deleteid
            );
            globals.storageManager.removeImageUrl(
              this.deleteid
            ).catch(() => console.log("Image not found"));
        },
        update(deleteid) {
            this.deleteid = deleteid;
        }
    },
    mounted() {
        /* eslint-disable */
        $(`#${this.$props.id}inputFgColor`).colorpicker();
        $(`#${this.$props.id}inputAccentColor`).colorpicker();

        $(`#${this.$props.id}inputFgColor`).on('colorpickerChange', (event) => {
            this.inputFgColor = event.color.toString();
        });

        $(`#${this.$props.id}inputAccentColor`).on('colorpickerChange', (event) => {
            this.inputAccentColor = event.color.toString();
        });
    }
};
</script>
<style>
.errorText {
    color: red;
}
</style>