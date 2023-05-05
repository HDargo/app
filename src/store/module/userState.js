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
        getLoggin: state => state.isLoggedIn,
        getProfileImage: state => state.profileImage,
        getNickname: state => state.Nickname,
        getEmail: state => state.Email,
        getDesciption: state => state.Desciption
    },
    mutations: {
        doLogin: state => {
            state.profileImage = require('@/assets/logo.png')
            state.isLoggedIn = true;
            console.log('mutation do login');
        },
        doLogout: state => {
            state.isLoggedIn = false;
            console.log('mutation do logout');
        },
        doRegist: state => {
            state.isLoggedIn = true;
            console.log('mutation do regist');
        },
        changeProfile: (state, profileData) => {
            if(state.profileImage != null){
                state.profileImage = profileData['profileImage'];
            console.log('mutation change profile');
            }
        }
    },
    actions: {
    },
}
