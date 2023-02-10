import { createWebHistory, createRouter } from 'vue-router'
import ListPage from '@/views/ListPage'
import MyAccount from '@/views/account/MyAccount'
import LoginPage from '@/views/account/LoginPage'
import RegistPage from '@/views/account/RegistPage'
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
    },{
        path: '/login',
        name: 'Login',
        component: LoginPage
    },{
        path: '/regist',
        name: 'Regist',
        component: RegistPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router