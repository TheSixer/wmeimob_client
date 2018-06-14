
const save = (key, value, expires) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify({data: value, expires}))
  }
}
const load = (key) => {
  let data = null
  if (process.browser) {
    data = localStorage.getItem(key)
  }
  console.log(JSON.parse(data))
  if (data) {
    const dataObj = JSON.parse(data)
    if (new Date().getTime() < dataObj.expires) {
      return dataObj.data
    }
  }
  return null
}
/**
 * 清除关键字为key的缓存数据
 */
const remove = (key) => {
  if (process.browser) {
    localStorage.removeItem(key)
  }
}

export default {
  save,
  load,
  remove
}
