import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

import { AppUrlList, UrlList } from "../Interfaces/Http"

class HttpService {
	private urlList: UrlList
	private appUrlList: AppUrlList
	private http: AxiosInstance
	private _token: string

	async start() {
		await this.setupUrlList()
		await this.setupAppUrlList()
		this.setupHttpInstance()
		this.setupRequestInterceptors()

		return this.http
	}

	private async setupUrlList() {
		try {
			const url = "https://prod-s0-webapp-proxy.nubank.com.br/api/discovery"
			const { data } = await axios.get(url)

			this.urlList = data
		} catch(error) {
			Promise.reject(`[nubankjs] Error when trying to get url list: ${error}`)
		}
	}

	private async setupAppUrlList() {
		try {
			const url = "https://prod-s0-webapp-proxy.nubank.com.br/api/app/discovery"
			const { data } = await axios.get(url)

			this.urlList = data
		} catch(error) {
			Promise.reject(`[nubankjs] Error when trying to get app url list: ${error}`)
		}
	}

	private setupRequestInterceptors() {
		this.http.interceptors.request.use(async (config: AxiosRequestConfig) => {
			config.headers  = {
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
}

export default new HttpService()
