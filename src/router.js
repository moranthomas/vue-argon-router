import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Landing  from './views/Landing.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/landing',
      name: 'landing',
      component: Landing
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import( /* webpackChunkName: "profile" */ './views/Profile.vue')
    },
     {
       path: '/register',
       name: 'register',
       component: () => import( /* webpackChunkName: "register" */ './views/Register.vue')
     }, {
       path: '/login',
       name: 'login',
       component: () => import( /* webpackChunkName: "login" */ './views/Login.vue')
     }
  ]
})
