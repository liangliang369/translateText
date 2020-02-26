import Vue from 'vue'
import VueRouter from 'vue-router'
import translateText from '../views/translateText'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'translateText',
    component: translateText
  },
]

const router = new VueRouter({
  routes
})

export default router
