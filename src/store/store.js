import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";

const store = new Vuex.Store({
    state: {
        isLoggedIn:false,
        profileImage : null
    },
    getters: {
        getLoggin(state){
            return state.isLoggedIn;
        },
        getProfileImage(state){
            return state.profileImage;
        }
    },
    mutations: {
        doLogin(state){
            state.profileImage = require('@/assets/logo.png')
            state.isLoggedIn = true;
        },
        doLogout(state){
            state.isLoggedIn = false;
        },
        doRegist(state){
            state.isLoggedIn = true;
        }
    },
    actions: {
    },
    plugins: [
        persistedstate({
          paths: ["isLoggedIn"], // 화면 갱신 시 유지시킬 변수 등록
        }),
      ],
});
export default store;