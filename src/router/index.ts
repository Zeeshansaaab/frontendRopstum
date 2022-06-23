import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/account/:type",
      name: "Login",
      component: () => import('../views/LoginView.vue'),
      beforeEnter(to, from, next) {
        let authUser = localStorage.getItem("accessToken")
        if (authUser != null) {
          return next({path:'/dashboard'});
        }
        return next();
      }
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import('../views/DashboardView.vue'),
      beforeEnter(to, from, next) {
        let authUser = localStorage.getItem("accessToken")
        if (authUser == null) {
          return next({path:'/login'});
        }
        return next();
      }
    },
    {
      path: "/category",
      name: "Category",
      component: () => import('../views/category/index.vue'),
      beforeEnter(to, from, next) {
        let authUser = localStorage.getItem("accessToken")
        if (authUser == null) {
          return next({path:'/login'});
        }
        return next();
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: "/login",
    },
  ]
})

export default router
