import Vue from 'vue'
import VueRouter from 'vue-router'
import Enrollment from '../views/Enrollment.vue'
import Login from '../views/Login.vue'
import Enrolled from '../views/Enrolled.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Enrollment
  },
  {
    path: '/enrollment',
    name: 'enrollment',
    component: Enrollment
  },
  {
    path: '/enrolled',
    name: 'enrolled',
    component: Enrolled
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
