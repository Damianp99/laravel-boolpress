require('./bootstrap');

window.Vue = require('vue');

import App from './components/App.vue'
import router from './routes.js'

const root = new Vue({
    el: '#root',
    router,
    render: h => h(App)
});