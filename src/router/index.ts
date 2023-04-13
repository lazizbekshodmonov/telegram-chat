import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue';
import UserVue from '@/views/User.vue';
import RegisterVue from '@/views/Register.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'users/:id',
          name: 'user',
          component: UserVue
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegisterVue
    },

  ]
})

// const store = useUserStore()
const token = localStorage.getItem('token')
router.beforeEach((to, from, next) => {
  if ((to.name !== 'login' && to.name !== 'registration') && token) next({ name: 'login' })
  else next()
})


export default router
