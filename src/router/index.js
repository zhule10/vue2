import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
// ./  指的是同级目录   import routes from './router' ===import routes from './router.js'  es6

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes
})
// routes===routes: routes  es6
