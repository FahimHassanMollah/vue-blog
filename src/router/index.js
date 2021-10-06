import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  
  {
    path: '/',
    name: 'Home',

    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/create',
    name: 'Create',
    
    component: () => import(/* webpackChunkName: "Create" */ '../views/Create.vue')
  },
  {
    path: '/posts/:id',
    name: 'Details',
    
    component: () => import(/* webpackChunkName: "Details" */ '../views/Details.vue')
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    
    component: () => import(/* webpackChunkName: "Tag" */ '../views/Tag.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
