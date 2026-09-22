import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../components/Home.vue'
import AboutView from '../components/About.vue'
import SupportView from '../components/Support.vue'
import DownloadView from '../components/Download.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/support', component: SupportView },
  { path: '/download', component: DownloadView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})