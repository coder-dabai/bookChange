import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import details from '../views/details.vue'
import login from '../views/login.vue'
import zhuce from '../views/zhuce.vue'
import guanli from '../views/guanli.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/details',
    name: 'details',
    component: details
  },
  {
    path: '/Login',
    name: 'Login',
    component: login
  },
  {
    path: '/zhuce',
    name: 'zhuce',
    component: zhuce
  },
  {
    path: '/guanli',
    name: 'guanli',
    component: guanli
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
