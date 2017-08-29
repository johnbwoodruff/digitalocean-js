"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const digitalocean_1 = require("../../digitalocean");
const environment_1 = require("../../conf/environment");
class ActionService extends digitalocean_1.DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new environment_1.Environment();
        this.baseUrl = env.baseUrl;
        axios_1.default.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        axios_1.default.defaults.headers.common['Content-Type'] = `application/json`;
    }
    /**
     * List all of the actions that have been executed on the current account.
     * Limited to 25 actions per page unless otherwise specified.
     *
     * @param {number} [page]
     * @param {number} [perPage]
     * @returns {Promise<Action[]>}
     * @memberof ActionsService
     */
    getAllActions(page, perPage) {
        page = page ? page : 1;
        perPage = perPage ? perPage : 25;
        return new Promise((resolve, reject) => {
            let url = `${this.baseUrl}/actions`;
            url += `?page=${page}`;
            url += `&per_page=${perPage}`;
            axios_1.default.get(url).then((response) => {
                // Return actual actions instead of wrapped actions
                resolve(response.data.actions);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Get an existing account action based on the provided ID
     *
     * @param {number} id
     * @returns {Promise<Action>}
     * @memberof ActionsService
     */
    getExistingAction(id) {
        return new Promise((resolve, reject) => {
            let url = `${this.baseUrl}/actions/${id}`;
            axios_1.default.get(url).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
exports.ActionService = ActionService;
//# sourceMappingURL=actions-service.js.map