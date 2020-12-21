import '@mdi/font/css/materialdesignicons.css' 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import lineClamp from 'vue-line-clamp'

require('./assets/style/main.css'); 

Vue.config.productionTip = false
Vue.use(vuetify, {
  iconfont: 'mdi'
});
Vue.use(lineClamp);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
