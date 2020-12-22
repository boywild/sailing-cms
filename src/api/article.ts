import Http from '@/api/index'
import commonParams from '@/utils/common-params'
// import helper from 'utils/helper'

// const moduleName = 'lztask'

class Article {
  /**
   * 分类列表
   */
  static getCategoryList() {
    const http = new Http()
    http.path = '/categoryList'
    // http.headers = {}
    // http.query = { age: 12 }
    http.body = { ...commonParams }
    // http.loading = true
    return http.post()
  }
}
export default Article
