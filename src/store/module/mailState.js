import axios from 'axios'

const mailState = {
  state: {
    subscribedChannel: null,
    messages: []
  },
  getters: {
    subscribedChannel: state => state.subscribedChannel,
    messages: state => state.messages
  },
  actions: {
    subscribeToChannel({ commit }, channel) {
      axios.post(`/subscribe/${channel}`)
        .then(() => {
          commit('setSubscribedChannel', channel)
        })
        .catch(error => {
          console.error('subscribeToChannel error:', error)
        })
    },
    unsubscribeFromChannel({ commit }) {
      axios.post('/unsubscribe')
        .then(() => {
          commit('setSubscribedChannel', null)
        })
        .catch(error => {
          console.error('unsubscribeFromChannel error:', error)
        })
    },
    addMessage({ commit }, message) {
      commit('addMessage', message)
    }
  },
  mutations: {
    setSubscribedChannel(state, channel) {
      state.subscribedChannel = channel
    },
    addMessage(state, message) {
      state.messages.push(message)
    }
  }
}

export default mailState;
