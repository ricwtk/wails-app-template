import {createApp} from 'vue'
import App from './App.vue'
import './style.css';

import Home from "./components/Home.vue"
import Settings from './components/Settings.vue';
import { createRouter, createWebHashHistory } from "vue-router"

import SvgIcon from '@jamescoyle/vue-icon'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/settings", component: Settings }
  ],
});
createApp(App).use(router)
.component("SvgIcon", SvgIcon)
.mount('#app')
