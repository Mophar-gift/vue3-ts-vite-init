import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface KGRequestConfigInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => any
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface KGRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: KGRequestConfigInterceptors<T>
}
