import Vue from 'vue'
import App from './App'
import router from './bin/Router'

import './bin/Element'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App, },
    template: '<App/>',
})