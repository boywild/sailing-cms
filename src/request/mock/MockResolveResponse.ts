/**
 * Created by duy on 2018/8/17 10:26.
 */

import { typeOf } from '../http/Utils'
import { MockResolve } from '../http'

export default class MockResolveResponse implements MockResolve {
  constructor(config: any, headers: any) {
    this._config = config
    this._headers = headers
  }
  private _config = {}
  private _headers = {}
  private _data = {}

  get status(): number {
    return 200
  }

  get statusText(): string {
    return 'OK'
  }

  get request(): any {
    return {}
  }

  get headers(): any {
    return this._headers
  }

  get config(): any {
    return this._config
  }

  get data(): any {
    return this._data
  }

  set data(value) {
    if (
      typeOf(value) !== 'string' &&
      typeOf(value) !== 'boolean' &&
      typeOf(value) !== 'number' &&
      typeOf(value) !== 'object' &&
      typeOf(value) !== 'array' &&
      typeOf(value) !== 'undefined'
    )
      throw new TypeError('data类型错误')
    this._data = value
  }
}
