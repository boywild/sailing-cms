/**
 * Created by duy on 2018/7/3 15:06.
 */

import DebugEngine from './DebugEngine'
import { typeOf } from './Utils'

export default class DebugFail extends DebugEngine {
  constructor() {
    super()
    this._printMethod = 'error'
  }

  private errorMessage = ''

  set message(value: string) {
    if (typeOf(value) !== 'string')
      throw new TypeError('DebugFail.message 类型应为 String')
    this.errorMessage = value
  }

  getCollectionInfo() {
    const collection = super.getCollectionInfo()
    return collection.concat([
      { title: '错误信息', content: this.errorMessage }
    ])
  }
}
