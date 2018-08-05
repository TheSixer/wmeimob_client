/**
 * 文章
 */
export const state = () => ({
  list: null,
  articleDetail: null
})

export const mutations = {
  RECORD_ARTICLE_LIST (state, data) {
    state.list = data
  },
  RECORD_ARTICLE_DETAIL (state, data) {
    state.articleDetail = data
  }
}
