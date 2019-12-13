import axios from 'axios'
import Vue from 'vue';
import {toast, loading} from '@/plugins'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV !== 'production';

Vue.use(toast)
Vue.use(loading)

let vm = new Vue()

axios.defaults.withCredentials = true
let http = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 60 * 1000
})

// 获取CancelToken 有需要的话可以用source.cancel();取消其他请求
const CancelToken = axios.CancelToken, source = CancelToken.source();
let queueNum = 0

http.interceptors.request.use(
  (config) => {
    // 请求前显示全局loading
    queueNum += 1
    vm.$loading.show()
    // 全局添加cancelToken
    config.cancelToken = source.token;
    return config;
  },
  (err) => {
    const error = err;
    return Promise.reject(error);
  },
)

http.interceptors.response.use(
  response => {
    // 全部请求完成后hide loading
    queueNum -= 1
    if (queueNum === 0) {
      vm.$loading.hide()
    }
    const res = response.data

    if (res.errorCode != 0) {
      vm.$toast({text: `${res.errorMsg}(${res.errorCode})`})
      return Promise.reject(response)
    } else{
      return res
    }
  },
  error => {
    if (error && error.response) {
      queueNum -= 1
      if (queueNum === 0) {
        vm.$loading.hide()
      }
      const res = error.response.data
      vm.$toast({text: `${res.errorMsg}(${res.errorCode})`})
    } else {
      vm.$loading.hide()
      vm.$toast({text: error})
    }
    return Promise.reject(error)
  }
)

export function GET(url, paramsOrData) {
  return http({ method: 'GET', url, params: paramsOrData })
}

export function POST(url, paramsOrData) {
  return http({ method: 'POST', url, data: paramsOrData })
}

export default http
