import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../components/Home.vue'
import AboutView from '../components/About.vue'
import DownloadView from '../components/Download.vue'
import CompileView from '../components/Compile.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/download', component: DownloadView },
  { path: '/build', component: CompileView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})