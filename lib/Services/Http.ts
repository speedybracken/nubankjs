import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

class HttpService {
	url: string
	http: AxiosInstance
	_token: string

	constructor() {
		this.setupUrl()
		this.setupHttpInstance()
		this.setupRequestInterceptors()	
	}

	setupUrl() {
		this.url = "https://prod-s0-webapp-proxy.nubank.com.br/api/proxy"
	}

	setupRequestInterceptors() {
		this.http.interceptors.request.use(async (config: AxiosRequestConfig) => {
			config.headers  = {
				Authorization: `Bearer ${this._token}`
			}

			return config
		})
	}

	setupHttpInstance() {
		this.http = axios.create({
			baseURL: this.url
		})
	}

	set token(token: string) {
		this._token = token
	}
}

export default new HttpService()
