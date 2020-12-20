/**
 * Created by duy on 2018/7/2 15:51.
 */
import Paths from 'swagger-paths'
import { typeOf } from '../http/Utils'
import MockResolveResponse from './MockResolveResponse'
import MockRejectError from './MockRejectError'
import { openApi, unknown } from 'mock/index'
import { MockConfig, MockResolve, MockReject } from '../http'
interface Result {
  [key: string]: any
}
type Mock = MockResolve | MockReject
export default class MockerEngine implements MockConfig {
  constructor(status: number, timeout: number) {
    this._status = status
    this._timeout = timeout
  }

  private _status = 0
  private _timeout = 0
  private _url = ''
  private _method = ''
  private _config = {}
  private _headers = {}
  private _data = {}

  get url() {
    return this._url
  }

  set url(value: string) {
    if (typeOf(value) !== 'string') throw new TypeError('MockerEngine.url 类型应为 String')
    this._url = value
  }

  get method() {
    return this._method
  }

  set method(value: string) {
    if (typeOf(value) !== 'string' || !['get', 'delete', 'post', 'put', 'patch'].includes(value.toLowerCase())) {
      throw new TypeError('MockerEngine 非法请求')
    }
    this._method = value.toLowerCase()
  }

  get config() {
    return this._config
  }

  set config(value: any) {
    if (typeOf(value) !== 'object') throw new TypeError('MockerEngine.config 类型应为 Object')
    this._config = value
  }

  get header() {
    return this._headers
  }

  set headers(value: any) {
    if (typeOf(value) !== 'object') throw new TypeError('MockerEngine.headers 类型应为 Object')
    this._headers = value
  }

  async getResponse(): Promise<Mock> {
    let response: Mock
    if (this._status === 200) {
      response = new MockResolveResponse(this._config, this._headers)
      response.data = this.getResponseData()
    } else {
      response = new MockRejectError(this._config, this._headers, this._status)
    }
    await this.timeoutHandler()
    return response
  }

  timeoutHandler() {
    const ms = this._timeout
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }

  getResponseData() {
    let data
    let hasFindApi = false
    for (const { baseURL, paths } of openApi) {
      // if (this._url.indexOf(baseURL) === 0) {
      const pathsInstance = new Paths(paths || {})
      // const result = pathsInstance.match(this._url.replace(baseURL, ''))
      const result = pathsInstance.match(this._url)
      if (!(this._method in result.value)) this.notFoundApi()
      data = result.value[this._method] !== null ? result.value[this._method] : undefined
      hasFindApi = true
      break
      // }
    }
    for (const [requestURL = {}, result = {}] of Object.entries(unknown)) {
      const res: Result = result
      if (this._url === requestURL) {
        if (!(this._method in res)) this.notFoundApi()
        data = res[this._method] || undefined
        hasFindApi = true
        break
      }
    }
    if (!hasFindApi) this.notFoundApi()
    return data
  }

  notFoundApi() {
    throw new Error(`Not Found Api => ${this._url} => [${this._method}]`)
  }
}
