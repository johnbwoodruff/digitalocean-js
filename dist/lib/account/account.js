"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
// TODO: Remove ApiKey when OAuth is implemented
const api_key_1 = require("../environment/api-key");
const environment_1 = require("../environment/environment");
class AccountService {
    constructor() {
        this.env = new environment_1.Environment();
        this.key = api_key_1.ApiKey;
        axios_1.default.defaults.headers.common['Authorization'] = `Bearer ${this.key}`;
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
            const url = this.env.baseUrl;
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
//# sourceMappingURL=account.js.map