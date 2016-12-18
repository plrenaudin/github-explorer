import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueMaterial)

import Home from './components/Home.vue'
import RepoDetails from './components/RepoDetails.vue'
import UserDetails from './components/UserDetails.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/search/', component: Home },
  { path: '/search/:q', component: Home },
  { path: '/details/repo/:owner/:name', component: RepoDetails },
  { path: '/details/user/:name', component: UserDetails }
]

const router = new VueRouter({routes})

Vue.material.registerTheme('default', {
    primary: 'blue',
    accent: 'deep-orange'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
