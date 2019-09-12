import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import wrap from '@vue/web-component-wrapper'

Vue.use(BootstrapVue)
// import App from './App.vue'
// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import ActivityStream from './components/ActivityStream.vue'


Vue.component('ActivityStream', ActivityStream)
const ActivityStreamElement = wrap(Vue, ActivityStream)

window.customElements.define('activity-stream', ActivityStreamElement)