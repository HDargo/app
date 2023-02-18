import { createWebHistory, createRouter } from 'vue-router'
import ListPage from '@/views/ListPage'
import MyAccount from '@/views/account/MyAccount'
import LoginPage from '@/views/account/LoginPage'
import RegistPage from '@/views/account/RegistPage'
import IndexPage from '@/views/IndexPage'
import ChartPage from '@/views/ChartPage';

import store from '@/store/store';

const requireAuth = () => (to, from, next) => {
    if (store.getters.getLoggin) {
      return next();
    }
    next('/login');
};

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
        component: MyAccount,
        beforeEnter : requireAuth()
    },{
        path: '/login',
        name: 'Login',
        component: LoginPage
    },{
        path: '/regist',
        name: 'Regist',
        component: RegistPage
    },{
        path: '/chart',
        name: 'Chart',
        component: ChartPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router