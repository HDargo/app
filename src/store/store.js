import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";

const store = new Vuex.Store({
    state: {
        isLoggedIn:false,
        profileImage : require('@/assets/logo.png'),
        Nickname:'nananana',
        Email:'nananana@nanana.com',
        Desciption:'Descrrrrrr'
    },
    getters: {
        getLoggin(state){
            return state.isLoggedIn;
        },
        getProfileImage(state){
            return state.profileImage;
        },
        getNickname(state){
            return state.Nickname;
        },
        getEmail(state){
            return state.Email;
        },
        getDesciption(state){
            return state.Desciption;
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
        },
        changeProfile(state, profileData){
            if(state.profileImage != null){
                state.profileImage = profileData['profileImage'];
            }
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