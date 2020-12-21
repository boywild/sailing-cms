import Http from '@/api/index'
// import commonParams from '@/utils/common-params'
// import helper from 'utils/helper'

// const moduleName = 'lztask'

class Article {
  /**
   * 分类列表
   */
  static getCategoryList() {
    const http = new Http()
    http.path = '/categoryList'
    return http.post()
  }
}
export default Article
