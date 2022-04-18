import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ListOfJobsView from '../views/Jobs/ListOfJobsView.vue'
import JobDetailView from '../views/Jobs/JobDetailView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path : '/jobs/',
    name: 'Jobs',
    component: ListOfJobsView
  },
  {
    path : '/jobs/:id',
    name: 'JobsDetails',
    component: JobDetailView,
    props: true
  },
  //redirect
  {
    path : '/all-jobs',
    redirect: '/jobs'
  },
  //catch all 404
  {
    path: '/catchAll(.*)',
    name: "NotFound",
    component: NotFoundView

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
