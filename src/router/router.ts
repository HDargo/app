import { createWebHistory, createRouter } from 'vue-router'
import MyAccount from '@/views/account/MyAccount.vue'
import LoginPage from '@/views/account/LoginPage.vue'
import RegistPage from '@/views/account/RegistPage.vue'
import IndexPage from '@/views/IndexPage.vue'
import BoardListPage from '@/views/bbs/BoardListPage.vue'
import Mailbox from '@/views/mailbox/MailBoxPage.vue'
import NoteList from '@/views/note/NoteListPage.vue'
import CalendarManage from '@/views/calendar/CalendarManage.vue'
import BoardPage from '@/views/bbs/BoardPage.vue'
import store from '@/store/store';

const requireAuth = () => (to: any, from: any, next: any) => {
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
        path: '/boardList',
        name: 'BoardList',
        component: BoardListPage
    },{
        path: '/notelist',
        name: 'NoteList',
        component: NoteList
    },{
        path: '/mailbox',
        name: 'Mailbox',
        component: Mailbox
    },{
        path: '/calendar',
        name: 'CalendarManage',
        component: CalendarManage
    }, {
        path: '/board/:boardNo',
        name: 'border',
        component:BoardPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router