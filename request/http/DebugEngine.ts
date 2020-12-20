/**
 * Created by duy on 2018/6/22 17:16.
 */
import Utils, { typeOf } from './Utils'
import { DebugConfig, LogType, MethodType } from '../http'
interface Obj {
  [key: string]: any
}
export default class DebugEngine implements DebugConfig {
  protected _printMethod: LogType = 'log'
  protected _url = ''
  protected _method: MethodType = 'get'
  protected _headers: Obj = {}
  protected _status = 0
  protected _query = {}
  protected _body = {}
  protected _response = {}

  set printMethod(value: LogType) {
    if (typeOf(value) !== 'string') throw new TypeError('DebugEngine.printMethod 类型应为 String')
    this._printMethod = value
  }

  set url(value: string) {
    if (typeOf(value) !== 'string') throw new TypeError('DebugEngine.url 类型应为 String')
    this._url = value
  }

  set method(value: MethodType) {
    if (typeOf(value) !== 'string') throw new TypeError('DebugEngine.method 类型应为 String')
    this._method = value.toUpperCase()
  }

  set headers(value: any) {
    if (typeOf(value) !== 'object') throw new TypeError('DebugEngine.headers 类型应为 Object')
    this._headers = value
  }

  set query(value: any) {
    this._query = value
  }

  set body(value: any) {
    this._body = value
  }

  set status(value: number) {
    if (!Number.isInteger(value)) throw new TypeError('DebugEngine.status 类型应为整数')
    this._status = value
  }

  set response(value: any) {
    this._response = value
  }

  public getCollectionInfo() {
    const collection = [
      { title: '请求地址', content: this._url },
      { title: '请求方法', content: this._method },
      { title: '请求头', content: this._headers },
      { title: 'Query参数', content: this._query },
      { title: 'Body参数', content: this._body },
      { title: 'HTTP状态码', content: this._status },
      { title: '应答内容', content: this._response }
    ]
    if (typeOf(this._headers['Content-Type']) === 'string') {
      if (
        this._headers['Content-Type'].indexOf('application/x-www-form-urlencoded') >= 0 ||
        this._headers['Content-Type'].indexOf('multipart/form-data') >= 0
      ) {
        collection.splice(4, 1, {
          title: 'FormData参数',
          content: this._body
        })
      }
    }
    if (['GET', 'DELETE'].includes(this._method)) {
      collection.splice(4, 1)
    }
    return collection
  }

  public print() {
    if (Utils.isDevelopmentEnv()) {
      console[this._printMethod]('****************************************')
      for (const item of this.getCollectionInfo()) {
        console[this._printMethod](`* - ${item.title}：`, item.content)
      }
      console[this._printMethod]('****************************************\n\r\n\r')
    }
  }
}
