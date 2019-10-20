import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PhotoSwipe from '@/components/photoswipe/PhotoSwipe'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/photoswipe',
            name: 'photoswipe',
            component: PhotoSwipe
        }

    ]
})
