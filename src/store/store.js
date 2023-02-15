import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";

const store = new Vuex.Store({
    state: {
        isLoggedIn:false,
    },
    getters: {
        getLoggin(state){
            return state.isLoggedIn;
        }
    },
    mutations: {
        doLogin(state){
            state.isLoggedIn = true;
        },
        doLogout(state){
            state.isLoggedIn = false;
        },
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