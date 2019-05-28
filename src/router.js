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
  console.log("Authenticated? -> " + bAuthenticated + " AND to.fullPath - > " + to.fullPath)

  /* NOTE: All guards except afterEach are “asynchronous”. T
  hey are called in sequence, therefore, you need to explicitly call the “next()” method
  to tell the router that you are done and that he can continue the sequence.
  This is also known as the middleware pattern. */

  if (bAuthenticated) {
    if (to.fullPath.startsWith("/login"))
    {
      next({ path: "/" });  // go to '/';
    }
    else if (to.fullPath.startsWith("/register"))
    {
      next({ path: "/" });  // go to '/';
    }
    else if (to.fullPath.startsWith("/profile")) {
        //alert('to.fullPath = ' + to.fullPath)
        /*router.push({
          path: "/"
        });*/
        next();
        //refresh
    }
    else{
      next(); // allow to enter route specified in the requested url
    }
  }

  // A non-logged in user should be redirected to / when trying to access the Profile page
  else if (!bAuthenticated) {
    if (to.fullPath.startsWith("/profile")) {
      router.push({
        path: "/"
      });
      next({ path: "/login"  });  // go to '/login';
    }
    if (to.fullPath.startsWith("/transactions")) {
      router.push({
        path: "/"
      });
      next({
        path: "/login"
      }); // go to '/login';
    }
    next(); // allow to enter route specified in the requested url
  }


});

export default router
