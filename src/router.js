import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'

Vue.use(Router)

let router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  // A logged in user should get redirected to / on site if trying to access Registration, Password Reset or Login Page
  const bAuthenticated = Boolean(JSON.parse(localStorage.getItem("authenticated")));

  if (bAuthenticated) {
    if (
      to.fullPath.startsWith("/login") ||
      to.fullPath.startsWith("/register") ||
      to.fullPath.startsWith("/reset-password")
    ) {
      router.push({
        path: "/"
      });
    }
  }

  // A non-logged in user should be redirected to / when trying to access the Profile page
  /*if (!bAuthenticated) {
    if (to.fullPath.startsWith("/profile")) {
      router.push({
        path: "/"
      });
    }
  }*/

  next();
});

export default router
