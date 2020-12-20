/**
 * Created by duy on 2018/6/20 15:38.
 */

import _, { reject } from 'lodash'
import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance, AxiosError, AxiosPromise } from 'axios'
import DebugOk from './DebugOk'
import DebugFail from './DebugFail'
import MockerEngine from '../mock/MockerEngine'
import Utils from './Utils'
import { HttpConfig, RequestMethod, LoadingType, RequestConfig, MockConfig, DebugConfig } from '../http'
interface Obj {
  [key: string]: any
}
type Loading = boolean | string | object | LoadingType
export default class HttpEngine implements HttpConfig, RequestMethod {
  protected _baseURL = ''
  protected _headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8'
  }

  protected _timeout = 10000
  protected _query: Obj = {}
  protected _path = ''
  protected _body = {}
  protected _loading: Loading = true
  protected _loadingTypes = ['normal', 'bounce', 'loader', 'square']
  protected _mockStatusCode = 200
  protected _mockTimeout = 3000
  protected _requestedSever = false

  /**
   * @param value {String}
   * */
  set baseURL(value: string) {
    if (!_.isString(value)) throw new TypeError('baseURL类型应为String')
    this._baseURL = value
  }

  /**
   * @param value {Object}
   * */
  set headers(value: any) {
    if (!_.isObject(value)) throw new TypeError('headers类型应为Object')
    _.assign(this._headers, value)
  }

  /**
   * @param value {Number}
   * */
  set timeout(value: number) {
    if (!_.isNumber(value)) throw new TypeError('timeout类型应为Number')
    this._timeout = value * 1000
  }

  /**
   * @param value {Object}
   * */
  set query(value: any) {
    if (!_.isObject(value)) throw new TypeError('query类型应为Object')
    for (const [key, val] of Object.entries(value)) {
      this._query[key] = val === '' ? undefined : val
    }
  }

  /**
   * @param value {String}
   * */
  set path(value: string) {
    if (!_.isString(value)) throw new TypeError('path类型应为String')
    this._path = value
  }

  /**
   * @param value {String|Number|Object}
   * */
  set body(value: any) {
    if (!(_.isString(value) || _.isNumber(value) || _.isArray(value) || _.isObject(value)))
      throw new TypeError('body类型支持String、Number、Object、Array')
    this._body = value
  }

  /**
   * 设置是否loading
   *
   * @memberof HttpEngine
   */
  set loading(value: Loading) {
    if (!(_.isBoolean(value) || _.isString(value) || _.isObject(value))) throw new TypeError('loading类型支持Boolean、String、Object')
    if (_.isString(value) && !this._loadingTypes.includes(value)) {
      throw new TypeError(`loading类型为String时，应传入${this._loadingTypes.join('、')}中的一种`)
    }
    this._loading = value
  }

  /**
   * @param value {Number}
   * */
  set mockStatusCode(value: number) {
    if (!Number.isInteger(value)) throw new TypeError('mockStatusCode类型应为Integer')
    this._mockStatusCode = value
  }

  /**
   * @param value {Number}
   * */
  set mockTimeout(value: number) {
    if (!Number.isInteger(value)) throw new TypeError('mockTimeout类型应为Integer')
    this._mockTimeout = value * 1000
  }

  /**
   * @param value {Boolean}
   * */
  set requestedSever(value: boolean) {
    if (!_.isBoolean(value)) throw new TypeError('isRequestSever类型应为Boolean')
    this._requestedSever = value
  }

  public createInstance(): AxiosInstance {
    let axiosConfig: RequestConfig = {
      baseURL: this._baseURL,
      timeout: this._timeout,
      headers: this._headers,
      loading: this._loading
    }
    if (Utils.enableAdapterMode(this._requestedSever)) {
      axiosConfig = {
        ...axiosConfig,
        adapter: (config: AxiosRequestConfig): AxiosPromise<any> => {
          if (process.env.NODE_ENV === 'development') {
            return this.adapterHandler(config)
          } else {
            return new Promise((resolve, reject) => {
              resolve()
            })
          }
        }
      }
    }
    const instance = axios.create(axiosConfig)
    instance.interceptors.request.use(
      config => {
        this.beforeSendRequestHandler(config)
        return config
      },
      error => Promise.reject(error)
    )
    instance.interceptors.response.use(
      response => {
        this.printResponseInfo(response)
        this.afterResolveResponseHandler(response)
        return response
      },
      error => {
        this.printResponseError(error)
        this.afterRejectResponseHandler(error)
        return Promise.reject(error)
      }
    )
    return instance
  }

  adapterHandler(config: AxiosRequestConfig): AxiosPromise<any> {
    const status = this._mockStatusCode
    const $timeout = this._mockTimeout
    return new Promise(function(resolve, reject) {
      const mock: MockConfig = new MockerEngine(status, $timeout)
      mock.url = config.url || ''
      mock.method = config.method || ''
      mock.config = config
      mock.headers = config.headers
      mock.getResponse().then(response => {
        if (status === 200) {
          resolve(response)
        } else {
          reject(response)
        }
      })
    })
  }

  printResponseInfo(response: AxiosResponse) {
    const debug: DebugConfig = new DebugOk()
    debug.url = (response.config.baseURL || '') + (response.config.url || '')
    debug.method = response.config.method || ''
    debug.headers = response.config.headers
    debug.query = response.config.params
    debug.body = response.config.data
    debug.status = response.status
    debug.response = response.data
    debug.print()
  }

  printResponseError(error: AxiosError) {
    const debug: DebugConfig = new DebugFail()
    console.log(error)
    debug.url = (error.config.baseURL || '') + (error.config.url || '')
    debug.method = error.config.method || ''
    debug.headers = error.config.headers
    debug.query = error.config.params
    debug.body = error.config.data
    debug.status = (error.response && error.response.status) || 0
    debug.response = (error.response && error.response.data) || undefined
    debug.message = error.message || ''
    debug.print()
  }

  /**
   * @description GET请求
   * @return Promise
   * */
  public get(): Promise<any> {
    return this.createInstance().get(this._path, { params: this._query })
  }

  /**
   * @description DELETE请求
   * @return Promise
   * */
  public delete(): Promise<any> {
    return this.createInstance().delete(this._path, { params: this._query })
  }

  /**
   * @description POST请求
   * @return Promise
   * */
  public post(): Promise<any> {
    return this.createInstance().post(this._path, this._body, {
      params: this._query
    })
  }

  /**
   * @description PUT请求
   * @return Promise
   * */
  public put(): Promise<any> {
    return this.createInstance().put(this._path, this._body, {
      params: this._query
    })
  }

  /**
   * @description PATCH请求
   * @return Promise
   * */
  public patch(): Promise<any> {
    return this.createInstance().patch(this._path, this._body, {
      params: this._query
    })
  }
  /* eslint-disable */
  /**
   * @description 发送请求之前的勾子
   * @param config {Object}
   * */
  public beforeSendRequestHandler(config: AxiosRequestConfig) {}

  /**
   * @description 成功应答的勾子
   * @param response {Object}
   * */
  public afterResolveResponseHandler(response: AxiosResponse) {}

  /**
   * @description 错误应答的勾子
   * @param error {Object}
   * */
  public afterRejectResponseHandler(error: AxiosError) {}
  /* eslint-enable */
}
