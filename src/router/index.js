import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import ('../views/Clients.vue')
  },
  {
    path: '/club',
    name: 'Club',
    component: () => import('../views/Club')
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import('../views/Event')
  },
  {
    path: '/food',
    name: 'Food',
    component: () => import('../views/Food')
  },
  {
    path: '/official',
    name: 'Official',
    component: () => import('../views/Official')
  },
  {
    path: '/studio',
    name: 'Studio',
    component: () => import('../views/Studio')
  },
  {
    path: '/wedding',
    name: 'Wedding',
    component: () => import('../views/Wedding')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
