export const userState = {
    namespace : true,
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
}