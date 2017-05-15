// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'vue2-animate/dist/vue2-animate.min.css'
import './common.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import mixins from './mixins'
import VueTouch from 'vue2-touch'
import VueScrollTo from 'vue-scrollto'
import Carousel3d from 'vue-carousel-3d'

Vue.config.productionTip = false
Vue.use(VueTouch)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1500,
  eassing: 'ease',
  offset: 0
})

Vue.use(Carousel3d)
Vue.mixin(mixins)
router.beforeEach((to, from, next) => {
  let routes = ['/', '/projects', '', '/contact']
  let currentPath = to.path
  let routeIndex = routes.findIndex(item => item === currentPath)
  if (routeIndex < 0) {
    store.state.topTabIndex = 0
  } else {
    store.state.topTabIndex = routeIndex
  }

  if (to.query.type && to.query.type === 'life') {
    store.state.topTabIndex = 2
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
