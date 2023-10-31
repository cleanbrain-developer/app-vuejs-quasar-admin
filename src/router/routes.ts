import { RouteRecordRaw } from 'vue-router'
import IndexPage from 'pages/IndexPage.vue'
import GroupUserPage from 'pages/GroupUserPage.vue'
import AuditLogPage from 'pages/AuditLogPage.vue'
import SchedulerPage from 'pages/SchedulerPage.vue'
import ErrorNotFound from 'pages/ErrorNotFound.vue'
import LoginPage from 'pages/LoginPage.vue'
import MainLayout from 'layouts/MainLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: IndexPage,
      },
      {
        path: 'group-user',
        component: GroupUserPage,
      },
      {
        path: 'audit-log',
        component: AuditLogPage,
      },
      {
        path: 'scheduler',
        component: SchedulerPage,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },
]

export default routes
