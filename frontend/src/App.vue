<script setup>
import { ref } from "vue"
import { mdiViewDashboardOutline, mdiChevronLeft, mdiChevronRight, mdiCogOutline } from '@mdi/js'

let showSideBar = ref(true)

function toggleSideBar() {
  showSideBar.value = !showSideBar.value
}
</script>

<template>
  <div id="app" class="flex flex-row">
    <nav class="bg-slate-200 flex flex-col" :class="showSideBar ? 'min-w-52' : 'w-0'">
      <div class="text-sm text-center px-0.5 py-0.5 bg-slate-500 text-white">Menu</div>
      <div class="flex flex-col grow px-2 py-2">
        <RouterLink to="/" class="flex flex-col">
          <button class="hover:bg-slate-300 px-2 py-2 text-left rounded truncate flex gap-1"><svg-icon type="mdi" :path="mdiViewDashboardOutline"></svg-icon>Home</button>
        </RouterLink>
        <div class="grow"></div>
        <RouterLink to="/settings" class="flex flex-col">
          <button class="hover:bg-slate-300 px-2 py-2 text-left rounded truncate flex gap-1"><svg-icon type="mdi" :path="mdiCogOutline"></svg-icon>Settings</button>
        </RouterLink>
      </div>
      <div class="text-xs px-0.5 py-0.5 bg-slate-500 text-white text-right">Created by Richard Wong</div>
    </nav>
    <button class="bg-slate-50 text-white hover:bg-slate-300" @click="toggleSideBar"><svg-icon type="mdi" :path="showSideBar ? mdiChevronLeft : mdiChevronRight"></svg-icon></button>
    <main class="bg-slate-50 grow relative overflow-auto">
      <RouterView />
    </main>
  </div>
</template>

<style>

</style>
