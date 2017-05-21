import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: require('@/pages/Home.vue')
    },
    {
      path: '/projects',
      component: require('@/pages/Project.vue')
    },
    {
      path: '/contact',
      component: require('@/pages/Contact.vue')
    }
  ]
})
