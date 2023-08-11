import {createStore} from "vuex";
import {userState} from './module/userState'
import persistedstate from "vuex-persistedstate";

export default createStore({
    modules : {
        userState
    },
    plugins: [
        persistedstate({
          paths: ["userState"], // 화면 갱신 시 유지시킬 변수 등록
        }),
      ],
});