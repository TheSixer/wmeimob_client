/**
 * 用户信息
 */
export const state = () => ({
  userInfo: null
})

export const mutations = {
  RECORD_USERINFO (state, data) {
    state.userInfo = data
  },
  REMOVE_USERINFO (state) {
    state.userInfo = null
  }
}
