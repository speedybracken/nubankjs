import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

import { AppUrlList, UrlList } from "../Interfaces/Http"

class HttpService {
	private urlList: UrlList
	private appUrlList: AppUrlList
	private http: AxiosInstance
	private _token: string

	constructor() {
		this.setupUrlList = this.setupUrlList.bind(this)
		this.setupAppUrlList = this.setupAppUrlList.bind(this)
	}

	async start() {
		await this.setupUrlList()
		await this.setupAppUrlList()
		this.setupHttpInstance()
		this.setupRequestInterceptors()
	}

	async setupUrlList() {
		const url = "https://prod-s0-webapp-proxy.nubank.com.br/api/discovery"
		const { data } = await axios.get(url)

		if (!data) {
			return Promise.reject(new Error("[nubankjs] Error when trying to get url list"))
		}

		this.urlList = data
	}

	async setupAppUrlList() {
		const url = "https://prod-s0-webapp-proxy.nubank.com.br/api/app/discovery"
		const { data } = await axios.get(url)

		if (!data) {
			return Promise.reject(new Error("[nubankjs] Error when trying to get app url list"))
		}

		this.appUrlList = data
	}

	private setupRequestInterceptors() {
		this.http.interceptors.request.use(async (config: AxiosRequestConfig) => {
			config.headers = {
				Authorization: `Bearer ${this._token}`
			}

			return config
		})
	}

	private setupHttpInstance() {
		this.http = axios
	}

	set token(token: string) {
		this._token = token
	}

	get url() {
		return this.urlList
	}

	get appUrl() {
		return this.appUrlList
	}

	get api() {
		return this.http
	}
}

export default new HttpService()
