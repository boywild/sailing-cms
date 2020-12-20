import {
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError,
  AxiosInstance,
  AxiosAdapter,
  Method
} from 'axios'
export type LoadingType = 'normal' | 'bounce' | 'loader' | 'square'
export type RequestBody = number | boolean | string | Array<any> | RequestParams
export type RequestLoading = string | boolean | RequestParams
export type MethodType = string | Method
interface RequestParams {
  [propName: string]: any
}
export interface RequestResponse<T> {
  code: number
  message: string
  data: T
}
export interface RequestMethod {
  get(): Promise<any>
  delete(): Promise<any>
  post(): Promise<any>
  put(): Promise<any>
  patch(): Promise<any>
  beforeSendRequestHandler?(config: AxiosRequestConfig): void
  afterResolveResponseHandler?(response: AxiosResponse): void
  afterRejectResponseHandler?(error: AxiosError): void
}
export interface HttpConfig {
  baseURL?: string
  headers?: object
  timeout?: number
  query?: RequestParams
  path?: string
  body?: RequestBody
  loading?: RequestLoading
  loadingTypes?: LoadingType
  mockStatusCode?: number
  mockTimeout?: number
  requestedSever?: boolean
  createInstance(): AxiosInstance
  adapterHandler?: AxiosAdapter
  printResponseInfo?(response: AxiosResponse): void
  printResponseError?(error: AxiosError): void
}
export interface RequestConfig extends AxiosRequestConfig {
  loading?: RequestLoading
}

export type LogType = 'log' | 'error'
export interface DebugConfig {
  printMethod: LogType
  url: string
  method: MethodType
  headers: any
  query: RequestParams
  body: RequestBody
  status: number
  response: RequestBody
  getCollectionInfo(): Array<any>
  print(): void
  message?: string
}

export interface ErrorResponse {
  error_code: string
  error_msg: string
  timestamp: string
  path: string
}

export interface MockConfig {
  url: string
  method: MethodType
  config: AxiosRequestConfig
  headers: any
  getResponse(): Promise<T>
  timeoutHandler(): void
  getResponseData(): void
  notFoundApi(value: string): void
}
export interface MockResolve {
  status: number
  statusText: string
  request: any
  headers: any
  config: AxiosRequestConfig
  data: any
}
export class MockReject {
  constructor(config: any, headers: any, status: number): any
  data?: any
}

declare module '*HttpEngine.*' {
  let HttpEngine: HttpConfig | RequestMethod
  export default HttpEngine
}
