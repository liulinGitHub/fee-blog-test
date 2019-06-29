// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import fetch from './assets/scripts/request';
import * as utils from './assets/scripts/utils';
import ElementUI from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

Vue.use(ElementUI, { locale });

// 设置语言
locale.use(lang)

Vue.config.productionTip = false
Vue.prototype.$http = fetch;
Vue.prototype.$utils = utils;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
