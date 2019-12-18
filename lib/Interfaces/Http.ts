export interface UrlList {
	register_prospect_savings_web: string
	register_prospect_savings_mgm: string
	pusher_auth_channel: string
	register_prospect_debit: string
	reset_password: string
	register_prospect: string
	register_prospect_savings_request_money: string
	register_prospect_global_web: string
	register_prospect_c: string
	request_password_reset: string
	auth_gen_certificates: string
	login: string
	auth_device_resend_code: string
	msat: string
}

export interface AppUrlList {
	scopes: string
	creation: string
	change_password: string
	smokejumper: string
	block: string
	lift: string
	force_reset_password: string
	revoke_token: string
	userinfo: string
	reset_password: string
	unblock: string
	shard_mapping_cnpj: string
	shard_mapping_cpf: string
	register_prospect: string
	engage: string
	account_recovery_confirm: string
	magnitude: string
	revoke_all: string
	user_hypermedia: string
	gen_certificate: string
	token: string
	account_recovery: string
	scopes_remove: string
	admin_revoke_all: string
	faq: {
		ios: string
		android: string
		wp: string
	}
	scopes_add: string
	registration: string
	global_services: string
	start_screen: string
	user_change_password: string
	account_recovery_token: string
	user_status: string
}