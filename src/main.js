import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'cesium/Widgets/widgets.css'
import Api from './api/index'
import './assets/style/init.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.prototype.$axios = Api;

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
