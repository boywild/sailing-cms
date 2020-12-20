import Http from '@/api/index'
// import helper from 'utils/helper'

// const moduleName = 'lztask'

class Test {
  /**
   * 获取任务完成状态
   * @param { } query
   */
  static queryTaskStatus() {
    const http = new Http()
    http.path = '/toparticles'
    // http.headers = {}
    // http.query = { age: 12 }
    // http.body = { name: 'chentian' }
    // http.loading = true
    return http.get()
  }
}
export default Test
