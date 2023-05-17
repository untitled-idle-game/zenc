<template>
    <NavigationBar/>
    <div class="grid container text-center">
        <div class="row">
            <h1 class="fg-color">How are you feeling today?</h1>
        </div>
        <div class="form-group row">
            <div class="form-check">
                <input class="form-check-input" type="radio" name="feeling" id="feeling1">
                <label class="form-check-label" for="flexRadioDefault1">
                    Default radio
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="feeling" id="feeling2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                    Default checked radio
                </label>
            </div>
        </div>
    </div>
</template>
<script>
import NavigationBar from './NavigationBar.vue';
export default {

}
</script>