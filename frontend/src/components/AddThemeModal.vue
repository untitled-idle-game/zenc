<template>
  <div class="modal fade" id="addThemeDialog" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add quote</h5>
      </div>

      <div class="modal-body">
        <!-- Form for add modal -->
        <div class="form-group">
          <label for="inputName">Name</label> <!-- for is an accessibility thing -->
          <input type="text" class="form-control" id="inputName" placeholder="">
        </div>
        <div class="form-group">
          <label for="inputFgColor">Foreground Color</label>
          <input type="text" class="form-control" id="inputFgColor" placeholder="">
          <span class="bmd-help"></span>
        </div>
        <div class="form-group">
          <label for="inputAccentColor">Foreground Color</label>
          <input type="text" class="form-control" id="inputAccentColor" placeholder="">
          <span class="bmd-help"></span>
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
    methods: {
        addTheme() {
            console.log("TODO: add theme");
        }
    }
};
</script>