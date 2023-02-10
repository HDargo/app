import {reactive} from 'vue'
import router from '@/router/router';

export const store = reactive({
    isLogin : false,
    async DoLogin(){
        this.isLogin = true;
        await router.push('/');
    },
    async DoLogout(){
        this.isLogin = false;
        await router.push('/');
    }
})