import storage from '~/utils/storage'

export const state = () => ({
  token: null,
  isLogined: false,
})

export const mutations = {
  RECORD_TOKEN (state, token) {
    state.token = token
  },
  EXIT (state) {
    state.isLogined = false
  }
}
