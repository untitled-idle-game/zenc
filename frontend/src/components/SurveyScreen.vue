<template>
    <NavigationBar/>
    <div class="container" id="surveyContainer">
        <div class="row" style="height: 1em">
        </div>
        <div class="row text-center">
            <h1 class="fg-color col-12" :style="{color: textColor}">How are you feeling today?</h1>
        </div>
        <div class="row" style="height: 2em">
        </div>
        <div class="form-group row text-center" :style="{color: textColor}">
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" name="feeling" id="feeling1" v-on:change="onOptionSelected">
                <label class="form-check-label" for="feeling1">
                    Good
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" name="feeling" id="feeling2" v-on:change="onOptionSelected">
                <label class="form-check-label" for="feeling2">
                    Okay
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" name="feeling" id="feeling3" v-on:change="onOptionSelected">
                <label class="form-check-label" for="feeling3">
                    Meh
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="radio" name="feeling" id="feeling4" v-on:change="onOptionSelected">
                <label class="form-check-label" for="feeling4">
                    Bad
                </label>
            </div>
        </div>
        <div class="row" style="height: 3em">
        </div>
        <div class="row">
            <div class="form-group col-12 text-center" :style="{color: textColor}">
                <textarea class="form-control" id="whyTextArea" rows="3" placeholder="Why?"></textarea>
            </div>
        </div>
        <a class="btn btn-outline" href="/">Let's relax...</a>
    </div>
</template>
<script>
import NavigationBar from './NavigationBar.vue';
export default {
    components: {
        NavigationBar
    },
    data() {
        return {
            textColor: "#ffffff"
    }},
    methods: {
        onOptionSelected() {
            
        }
    }
}
</script>
<style scoped>
#surveyContainer {
    border-radius: 10px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
}
textarea {
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px;
}
textarea::placeholder {
    color: rgba(255, 255, 255, 0.75);
}
.btn {
    color: white;
}
</style>