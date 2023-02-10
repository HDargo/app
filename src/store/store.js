import {reactive} from 'vue'

export const store = reactive({
    isLogin : false,
    DoLogin(){
        this.isLogin = true;
    },
    DoLogout(){
        this.isLogin = false;
    }
})