"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const digitalocean_1 = require("../../digitalocean");
const environment_1 = require("../../conf/environment");
class BlockStorageActionService extends digitalocean_1.DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new environment_1.Environment();
        this.baseUrl = env.baseUrl;
        axios_1.default.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        axios_1.default.defaults.headers.common['Content-Type'] = `application/json`;
    }
    /**
     * Attach a Block Storage volume to a droplet
     *
     * @param {string} volumeId
     * @param {ActionRequest} actionRequest
     * @returns {Promise<Action>}
     * @memberof BlockStorageActionsService
     */
    attachVolumeToDroplet(volumeId, actionRequest) {
        return new Promise((resolve, reject) => {
            axios_1.default.post(`${this.baseUrl}/volumes/${volumeId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Attach a Block Storage volume to a droplet using the volume name
     *
     * @param {ActionRequest} actionRequest
     * @returns {Promise<Action>}
     * @memberof BlockStorageActionsService
     */
    attachVolumeToDropletByName(actionRequest) {
        return new Promise((resolve, reject) => {
            axios_1.default.post(`${this.baseUrl}/volumes/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Detach a Block Storage volume from a droplet
     *
     * @param {string} volumeId
     * @param {ActionRequest} actionRequest
     * @returns {Promise<Action>}
     * @memberof BlockStorageActionsService
     */
    detachVolumeFromDroplet(volumeId, actionRequest) {
        return new Promise((resolve, reject) => {
            axios_1.default.post(`${this.baseUrl}/volumes/${volumeId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Detach a Block Storage volume from a droplet using the volume name
     *
     * @param {ActionRequest} actionRequest
     * @returns {Promise<Action>}
     * @memberof BlockStorageActionsService
     */
    detachVolumeFromDropletByName(actionRequest) {
        return new Promise((resolve, reject) => {
            axios_1.default.post(`${this.baseUrl}/volumes/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Resize a Block Storage volume
     *
     * @param {string} volumeId
     * @param {ActionRequest} actionRequest
     * @returns {Promise<Action>}
     * @memberof BlockStorageActionsService
     */
    resizeVolume(volumeId, actionRequest) {
        return new Promise((resolve, reject) => {
            axios_1.default.post(`${this.baseUrl}/volumes/${volumeId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * List all actions that have been executed on the specified volume.
     * Limited to 25 actions per page unless otherwise specified.
     *
     * @param {string} volumeId
     * @param {number} [page]
     * @param {number} [perPage]
     * @returns {Promise<Action[]>}
     * @memberof BlockStorageActionsService
     */
    getAllVolumeActions(volumeId, page, perPage) {
        page = page ? page : 1;
        perPage = perPage ? perPage : 25;
        return new Promise((resolve, reject) => {
            let url = `${this.baseUrl}/volumes/${volumeId}/actions`;
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
     * Get an existing volume action based on the provided ID
     *
     * @param {string} volumeId
     * @param {number} actionId
     * @returns {Promise<Action>}
     * @memberof BlockStorageActionsService
     */
    getExistingVolumeAction(volumeId, actionId) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(`${this.baseUrl}/volumes/${volumeId}/actions/${actionId}`).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
exports.BlockStorageActionService = BlockStorageActionService;
//# sourceMappingURL=block-storage-actions-service.js.map