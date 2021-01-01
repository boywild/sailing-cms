import { Ref } from 'vue'
import Http from '@/api/index'
// import commonParams from '@/utils/common-params'

export interface LoginParams {
  account: string
  password: string
  type: string
}

export interface RegistryParams {
  account: string
  password: string
  type: string
  code?: string
  nickname?: string
}
interface SendSmsParams {
  phone?: string
  email?: string
}

interface ArticleParams {
  pageNo: number
  pageSize: number
  name?: string
  type?: string | null | Ref<string>
  categoryId?: string
  keywords?: string
  hot?: string
  authorId?: string
  leaderId?: string
  sortType?: string
}
interface ArticleDetailParams {
  articleId: string
}

interface ArticleCommentParams {
  articleId: string
  pageNo: number
  pageSize: number
}
interface PublishCommentParams {
  articleId: string
  pageNo: number
  pageSize: number
}

interface ListParams {
  pageNo: number
  pageSize: number
  hot?: string
}
class Article {
  /**
   * 登录
   */
  static login(params: LoginParams) {
    const http = new Http()
    http.path = '/login'
    http.body = { ...params }
    return http.post()
  }

  /**
   * 注册
   */
  static registry(params: RegistryParams) {
    const http = new Http()
    http.path = '/regist'
    http.body = { ...params }
    return http.post()
  }

  /**
   * 发送验证码
   */
  static sendSms(params: SendSmsParams) {
    const http = new Http()
    http.path = '/sendSms'
    http.body = { ...params }
    return http.post()
  }

  /**
   * 分类列表
   */
  static getCategoryList() {
    const http = new Http()
    http.path = '/categoryList'
    // http.headers = {}
    // http.query = { age: 12 }
    // http.body = { ...commonParams }
    return http.post()
  }

  /**
   * 文章列表
   */
  static getArticleList(params: ArticleParams) {
    const http = new Http()
    http.path = '/articleList'
    http.body = { ...params }
    return http.post()
  }

  /**
   * 文章详情
   */
  static articleDetail(params: ArticleDetailParams) {
    const http = new Http()
    http.path = '/articleDetail'
    http.body = { ...params }
    return http.post()
  }

  /**
   * 文章评论
   */
  static articleComment(params: ArticleCommentParams) {
    const http = new Http()
    http.path = '/articleCommentList'
    http.body = { ...params }
    return http.post()
  }

  /**
   * 发表评论
   */
  static pulishComment(params: PublishCommentParams) {
    const http = new Http()
    http.path = '/addArticleComment'
    http.body = { ...params }
    return http.post()
  }

  /**
   * 作者列表
   */
  static author(params: ListParams) {
    const http = new Http()
    http.path = '/authorList'
    http.body = { ...params }
    return http.post()
  }

  /**
   * 作者简介
   */
  static authorDetail(authorId: string) {
    const http = new Http()
    http.path = '/authorDetail'
    http.body = { authorId }
    return http.post()
  }

  /**
   * 领航者列表
   */
  static leader(params: ListParams) {
    const http = new Http()
    http.path = '/leaderList'
    http.body = { ...params }
    return http.post()
  }

  /**
   * 领航者简介
   */
  static leaderDetail(leaderId: string) {
    const http = new Http()
    http.path = '/leaderDetail'
    http.body = { leaderId }
    return http.post()
  }

  /**
   * 专题分类
   */
  static topic() {
    const http = new Http()
    http.path = '/topicList'
    return http.post()
  }
}
export default Article
