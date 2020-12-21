import _ from 'lodash'
import { AxiosResponse, AxiosError } from 'axios/index'
import commonParams from '@/utils/common-params'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { RequestConfig } from 'request/http'

// const HttpEngine = require(`HttpEngine/http/HttpEngine.${
//   process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
// }`).default
import HttpEngine from 'request/http/HttpEngine.dev'
export default class Http extends HttpEngine {
  constructor() {
    super()
    this.baseURL = process.env.VUE_APP_HTTP_BASE_URL || ''
    // this.baseURL = '/api'
    this.mockTimeout = 1
    this.requestedSever = true
  }

  beforeSendRequestHandler(config: RequestConfig) {
    NProgress.start()
    config.headers = { ...config.headers }
    console.log(config)
    if (config.data) {
      config.data = {
        ...config.data,
        ...commonParams
      }
    } else if (config.params) {
      config.params = {
        ...config.params,
        ...commonParams
      }
    }
  }

  afterResolveResponseHandler() {
    NProgress.done()
  }

  afterRejectResponseHandler(error: AxiosError<any>) {
    let errorMsg = error.message
    const response: AxiosResponse<any> | undefined = error.response
    if (errorMsg === 'Network Error') {
      errorMsg = '网络异常'
    }
    if (errorMsg.indexOf('timeout') >= 0) {
      errorMsg = '请求超时'
    }

    if (_.isObject(response)) {
      if (_.isObject(response.data)) {
        errorMsg = (response.data as any).error_msg
      }
      if (response.status === 401) {
        // helper.logout(sysConfig.loginPage)
        // return
      }
    }
    // helper.toast(errorMsg)
  }
}
