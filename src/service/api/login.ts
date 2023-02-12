import kgRequest from ".."

enum apiUrls {
  LOGIN = "/home/multidata"
}

interface IloginData {
  data: any
  returnCode: string
  success: boolean
}

export const loginApi = () => {
  return kgRequest.request<IloginData>({
    url: apiUrls.LOGIN,
    interceptors: {
      requestSuccessFn(config) {
        console.log("单次请求拦截")
        return config
      },
      responseSuccessFn(err) {
        console.log("单次相应拦截")
        return err
      }
    }
  })
}
