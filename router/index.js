import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/favourite',
    name: 'favourite',
    component: () => import(/* webpackChunkName: "about" */ '../views/Favourite.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
