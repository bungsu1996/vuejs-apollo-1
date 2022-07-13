import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('./../layouts/HomeLayout.vue'),
    children: [
      {
        path: '/',
        name: 'HomeBaseViews',
        component: () => import('../views/HomeBase.vue'),
      },
      {
        path: '/masuk',
        name: 'LoginViews',
        component: () => import('../views/Login.vue'),
      },
      {
        path: '/daftar',
        name: 'RegisterViews',
        component: () => import('../views/Register.vue'),
      },
      {
        path: '/data-list',
        name: 'DataListViews',
        component: () => import('../views/DataList.vue'),
      },
      {
        path: '/edit',
        name: 'EditViews',
        component: () => import('../views/Edit.vue'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
