// 상태 객체
const state = {
  notifications: []
}

// 변이 객체
const mutations = {
  // 알림 추가
  ADD_NOTIFICATION(state, notification) {
    state.notifications.push(notification)
  },
  // 알림 제거
  REMOVE_NOTIFICATION(state, notification) {
    const index = state.notifications.indexOf(notification)
    if (index !== -1) {
      state.notifications.splice(index, 1)
    }
  }
}

// 액션 객체
const actions = {
  // 알림 보이기
  showNotification({ commit }, notification) {
    commit('ADD_NOTIFICATION', notification)
  },
  // 알림 숨기기
  hideNotification({ commit }, notification) {
    commit('REMOVE_NOTIFICATION', notification)
  },
  // 알림 표시
  displayNotification({ commit }, notification) {
    commit('ADD_NOTIFICATION', notification)
  }
}

// 게터 객체
const getters = {
  // 알림 목록 반환
  notifications: state => state.notifications
}

// 모듈 객체
const noticeModule = {
  state,
  mutations,
  actions,
  getters
}

export default noticeModule
