"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const digitalocean_1 = require("../../digitalocean");
const environment_1 = require("../../conf/environment");
class AccountService extends digitalocean_1.DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new environment_1.Environment();
        this.baseUrl = env.baseUrl;
        axios_1.default.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        axios_1.default.defaults.headers.common['Content-Type'] = `application/json`;
    }
    /**
     * Get the account information associated with the provided credentials
     *
     * @returns {Promise<Account>}
     * @memberof AccountService
     */
    getUserInformation() {
        return new Promise((resolve, reject) => {
            const url = this.baseUrl;
            axios_1.default.get(`${url}/account`).then((response) => {
                // Return actual account instead of wrapped account
                resolve(response.data.account);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
exports.AccountService = AccountService;
//# sourceMappingURL=account-service.js.map