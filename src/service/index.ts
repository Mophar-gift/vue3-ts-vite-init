import KGRequest from "./request/request"
import { BASE_URL, TIME_OUT } from "./config/config"

const kgRequest = new KGRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn(config) {
      return config
    },
    requestFailureFn(err) {
      return err
    },
    responseSuccessFn(res) {
      return res
    },
    responseFailureFn(err) {
      return err
    }
  }
})

export default kgRequest
