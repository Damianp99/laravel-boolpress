import Vue from 'vue'
import VueRouter from 'vue-router'


// Vue inizializza vue router
Vue.use(VueRouter)

// importiamo i componenti necessari alle pagine
import HomePage from './components/pages/HomePage.vue'
import ContactPage from './components/pages/ContactPage.vue'
import PostDetailPage from './components/pages/PostDetailPage.vue'
import NotFoundPage from './components/pages/NotFoundPage.vue'

// definizione delle rotte 
const router = new VueRouter({
    mode: 'history',
    // per mettere la classe active nei link
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/contacts', component: ContactPage, name: 'contacts' },
        { path: '/posts/:id', component: PostDetailPage, name: 'post.show' },
        { path: '*', component: NotFoundPage },
    ]
});

export default router;