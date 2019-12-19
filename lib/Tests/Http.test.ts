import "dotenv/config"
import HttpService from "../Services/Http"
import * as assert from "assert"

describe("=> [SERVICE] Http test suit", () => {
	it("Should setup an url list", async () => {
		await assert.doesNotReject(HttpService.setupUrlList())
	})

	it("Should setup an app url list", async () => {
		await assert.doesNotReject(HttpService.setupAppUrlList())
	})
})
