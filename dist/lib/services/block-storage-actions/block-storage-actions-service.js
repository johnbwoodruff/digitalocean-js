import Axios from 'axios';
import { DigitalOcean } from '../../digitalocean';
import { Environment } from '../../conf/environment';
export class BlockStorageActionService extends DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new Environment();
        this.baseUrl = env.baseUrl;
        Axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        Axios.defaults.headers.common['Content-Type'] = `application/json`;
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
            Axios.post(`${this.baseUrl}/volumes/${volumeId}/actions`, actionRequest).then((response) => {
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
            Axios.post(`${this.baseUrl}/volumes/actions`, actionRequest).then((response) => {
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
            Axios.post(`${this.baseUrl}/volumes/${volumeId}/actions`, actionRequest).then((response) => {
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
            Axios.post(`${this.baseUrl}/volumes/actions`, actionRequest).then((response) => {
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
            Axios.post(`${this.baseUrl}/volumes/${volumeId}/actions`, actionRequest).then((response) => {
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
    getAllVolumeActions(volumeId, perPage, page) {
        page = page ? page : 1;
        perPage = perPage ? perPage : 25;
        return new Promise((resolve, reject) => {
            let url = `${this.baseUrl}/volumes/${volumeId}/actions`;
            url += `?page=${page}`;
            url += `&per_page=${perPage}`;
            Axios.get(url).then((response) => {
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
            Axios.get(`${this.baseUrl}/volumes/${volumeId}/actions/${actionId}`).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
//# sourceMappingURL=block-storage-actions-service.js.map