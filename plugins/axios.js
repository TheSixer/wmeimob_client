import Vue from 'vue'
import axios from 'axios'
import storage from '~/utils/storage'
import baseConfig from '~/base.config'

const service = axios.create({
  baseURL: baseConfig.baseUrl
})

// 拦截器
service.interceptors.request.use(config => {
  if (storage.load('token')) {
    config.headers.Authorization = `${storage.load('token')}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$http = axios
export default service
