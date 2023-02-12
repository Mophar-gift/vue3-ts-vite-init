const TIME_OUT = 10000
let BASE_URL = "/api"

if (import.meta.env.PROD) {
  BASE_URL = "/api"
} else if (import.meta.env.DEV) {
  BASE_URL = "/api"
} else {
  BASE_URL = "/api"
}

export { TIME_OUT, BASE_URL }
