import moment from 'moment'
import storage from '~/utils/storage'
import {
  userRegister,
  userLogin,
  queryAllArticle,
  queryArticleDetail
} from '~/api'

export const getters = {
  token: state => {
    console.log(storage.load('token'))
    return state.app.token || storage.load('token')
  },
  isLogined: state => state.app.isLogined || !!state.app.token || !!storage.load('token')
}

export const actions = {
  async register ({commit}, params) {
    const { data } = await userRegister(params)
    commit('app/RECORD_TOKEN', data.data.token)
    storage.save('token', data.data.token, data.data.expires)
  },
  async login ({ commit }, params) {
    const { data } = await userLogin(params)
    console.log(data)
    commit('app/RECORD_TOKEN', data.data.token)
    commit('user/RECORD_USERINFO', data.data.user)
    storage.save('token', data.data.token, data.data.expires)
  },
  /**
   * 注销
   */
  logOut ({ commit }) {
    //  清除缓存
    storage.remove('token')
    commit('app/EXIT')
    commit('user/REMOVE_USERINFO')
  },
  async getArticles({ commit }) {
    const { data } = await queryAllArticle()
    commit('article/RECORD_ARTICLE_LIST', data.data)
  },
  //  获取文章详情
  async loadArticleDetail({commit}, params = {}) {
    const { data } = await queryArticleDetail({id: params.id})
    commit('article/RECORD_ARTICLE_DETAIL', data)
  }
}
