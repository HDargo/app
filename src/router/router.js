import { createWebHistory, createRouter } from 'vue-router'
import ListPage from '@/views/ListPage'
import MyAccount from '@/views/MyAccount'
import IndexPage from '@/views/IndexPage'
const routes = [
    {
        path: '/',
        name: 'Index',
        component : IndexPage
    },{
        path: '/list',
        name: 'List',
        component: ListPage
    },{
        path: '/MyAccount',
        name: 'My Account',
        component: MyAccount
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router