import Vue from 'vue'
import App from './App.vue'

import Tabs from './tabs';

Vue.use(Tabs);

new Vue({
  el: '#app',
  render: h => h(App)
})
