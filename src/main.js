import Vue from 'vue'
import Vuex from 'vuex'
import App from './app'
import Store from './store'
import ImgAvatar from './components/img-avatar'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.component(ImgAvatar.name, ImgAvatar)

new Vue({
  render: h => h(App),
  store: new Vuex.Store(Store)
}).$mount('#app')
