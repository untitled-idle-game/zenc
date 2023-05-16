<template>
  <div class="modal fade" :id="id" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" :id="id+'inputTitle'">Add Theme</h5>
      </div>

      <div class="modal-body">
        <!-- Form for add modal -->
        <div class="container-fluid">
            <div class="form-group row">
                <label :for="`${id}inputName`">Name</label>
                <input type="text" class="form-control" placeholder="Theme Name" :id="id+'inputName'" v-model="inputName"/>
            </div>
            <div class="form-group row">
                <label :for="`${id}inputBackground`">Background</label>
                <input type="file" class="form-control" placeholder="Theme Name" :id="id+'inputBackground'" v-on:change="inputBackgroundFileChanged"/>
            </div>
            <div class="form-group row">
                <div class="col-12 col-md-6">
                    <label for="inputFgColor">Foreground Color</label>
                    <input type="text" class="form-control" :id="id+'inputFgColor'" placeholder="" v-model="inputFgColor"/>
                    <span class="bmd-help">Test</span>
                </div>
                <div class="col-12 col-md-6">
                    <label for="inputAccentColor">Accent Color</label>
                    <input type="text" class="form-control" :id="id+'inputAccentColor'" placeholder="" v-model="inputAccentColor">
                    <span class="bmd-help"></span>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPrice">Price</label>
                <input type="text" class="form-control" :id="id+'inputPrice'" placeholder="" v-model.number="inputPrice">
                <span class="bmd-help">"Try to keep this inexpensive so others will be able to use it :)"</span>
            </div>
        </div>
        <div v-if="errorText">
            <span class="errorText" v-text="errorText"></span><br/>
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
            errorText:"",
            inputName: "Untitled Theme",
            inputBackground: null,
            inputFgColor: "#000000",
            inputAccentColor: "#FFFFFF",
            inputPrice: 0,
            currentFile: null,
        }
    },
    methods: {
        inputBackgroundFileChanged(event) {
            this.inputBackground = event.target.files[0];
        },
        addTheme() {
            globals.themeManager.add(
                this.inputName,
                this.inputFgColor,
                this.inputAccentColor,
                this.inputPrice
            ).then(() => {
                if (this.inputBackground) {
                    globals.storageManager.uploadThemeImage(this.editid, this.inputBackground);
                }
            });
        }
    },
    mounted() {
        /* eslint-disable */
        $(`#${this.$props.id}inputFgColor`).colorpicker();
        $(`#${this.$props.id}inputAccentColor`).colorpicker();
        
        $(`#${this.$props.id}inputFgColor`).on('colorpickerChange', (event) => {
            if (event.color != null) {
                this.inputFgColor = event.color.toString();
            }
        });

        $(`#${this.$props.id}inputAccentColor`).on('colorpickerChange', (event) => {
            if (event.color != null) {
                this.inputAccentColor = event.color.toString();
            }
        });
    }
};
</script>
<style>
.errorText {
    color: red;
}
</style>