import Vue from 'vue'
import Main from './App.vue'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand';
Vue.component('b-navbar-brand', bNavbarBrand);

import bModal from 'bootstrap-vue/es/components/modal/modal';
Vue.component('b-modal', bModal)

Vue.config.productionTip = false

new Vue({
  render: h => h(Main),
}).$mount('#app')
