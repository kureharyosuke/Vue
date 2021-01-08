import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/views/Home';
import About from './components/views/About';

Vue.useContext(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path:'/', components: Home},
        {path:'/about', components: About}
    ]
})

export default router;