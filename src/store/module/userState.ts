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
        getLoggin: (state: { isLoggedIn: any; }) => state.isLoggedIn,
        getProfileImage: (state: { profileImage: any; }) => state.profileImage,
        getNickname: (state: { Nickname: any; }) => state.Nickname,
        getEmail: (state: { Email: any; }) => state.Email,
        getDesciption: (state: { Desciption: any; }) => state.Desciption
    },
    mutations: {
        doLogin: (state: { profileImage: any; isLoggedIn: boolean; }) => {
            state.profileImage = require('@/assets/logo.png')
            state.isLoggedIn = true;
            console.log('mutation do login');
        },
        doLogout: (state: { isLoggedIn: boolean; }) => {
            state.isLoggedIn = false;
            console.log('mutation do logout');
        },
        doRegist: (state: { isLoggedIn: boolean; }) => {
            state.isLoggedIn = true;
            console.log('mutation do regist');
        },
        changeProfile: (state: { profileImage: null; }, profileData: { [x: string]: any; }) => {
            if(state.profileImage != null){
                state.profileImage = profileData['profileImage'];
            console.log('mutation change profile');
            }
        }
    },
    actions: {
    },
}
