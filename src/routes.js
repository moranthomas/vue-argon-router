//const UserLogin = () => import('components/user/auth/login');
//const UserRegister = () => import('components/user/register');
import Home from './views/Home.vue'
import Landing from './views/Landing.vue'

export const routes = [
    //{ path: '/', component: LandPage, display: 'Home', style: 'glyphicon glyphicon-home' },
    {
        path: '/',
        component: Home,
        display: 'Home',
        name: 'home',
        style: 'glyphicon glyphicon-home'
    },
    {
        path: '/login',
        name: 'login',
        display: 'Login',
        component: () => import( /* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
        path: '/landing',
        name: 'landing',
        component: Landing
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting  this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }, {
        path: '/profile',
        name: 'profile',
        component: () => import( /* webpackChunkName: "profile" */ './views/Profile.vue')
    }, {
        path: '/transactions',
        name: 'transactions',
        component: () => import( /* webpackChunkName: "profile" */ './views/Transactions.vue')
    }, {
        path: '/register',
        name: 'register',
        display: 'Register',
        component: () => import( /* webpackChunkName: "register" */ './views/Register.vue')
    }
]
