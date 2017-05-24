import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/samsite',
      component: require('@/pages/Home.vue')
    },
    {
      path: '/samsite/projects',
      component: require('@/pages/Project.vue')
    },
    {
      path: '/samsite/contact',
      component: require('@/pages/Contact.vue')
    },
    {
      path: '/', redirect: '/samsite'
    }
  ]
})
