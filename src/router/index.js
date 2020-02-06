import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FormInput from '@/components/Form'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cvmaker',
    name: 'form',
    component: FormInput
  },
  {
    path: '/about',
    props: true,
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
  
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
