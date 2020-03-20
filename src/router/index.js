import Vue from 'vue';
import VueRouter from 'vue-router';

// public pages (statically loaded)
import Server from '../views/Server.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes = [
    {
      path: '/server',
      name: 'server',
      component: Server
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },

    //protected routes dynamically loaded
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/protected1',
      name: 'protected1',
      component: () => import('../views/Protected1.vue')
    },
    {
      path: '/protected2',
      name: 'protected2',
      component: () => import('../views/Protected2.vue')
    },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

// protect the access
router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/server'];
  const authRequired = !publicPages.includes(to.path);
  const token = localStorage.getItem('accessToken');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !token) {
    next('/login');
  } else {
    next();
  }
});


export default router;
