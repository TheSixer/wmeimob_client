/**
 * 文章
 */
export const state = () => ({
  list: null
})

export const mutations = {
  RECORD_ARTICLE_LIST (state, data) {
    state.list = data
  }
}
