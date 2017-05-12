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

Vue.config.productionTip = false
Vue.use(VueTouch)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1500,
  eassing: 'ease',
  offset: 0
})

Vue.mixin(mixins)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
