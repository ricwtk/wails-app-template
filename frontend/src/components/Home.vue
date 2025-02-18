<script setup>
import {reactive} from 'vue'
import {Greet} from '../../wailsjs/go/main/App'
import { mdiTailwind, mdiVuejs } from '@mdi/js'


const data = reactive({
  name: "",
  resultText: "Please enter your name below 👇",
})

function greet() {
  Greet(data.name).then(result => {
    data.resultText = result
  })
}

</script>

<template>
  <div class="container flex flex-col h-full gap-3 mx-auto px-2 py-2 text-center justify-center">
    <div class="m-5 text-3xl font-bold text-teal-500">Template for Wails + <svg-icon type="mdi" :path="mdiVuejs" class="inline"></svg-icon>Vue + <svg-icon type="mdi" :path="mdiTailwind" class="inline"></svg-icon>TailwindCSS + VueRouter + MaterialDesignIcon</div>
    <div>{{ data.resultText }}</div>
    <div>
      <input id="name" v-model="data.name" autocomplete="off" class="input" type="text"/>
      <button class="btn" @click="greet">Greet</button>
    </div>
  </div>
</template>

<style scoped>

</style>
