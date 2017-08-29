import Axios from 'axios';
import { DigitalOcean } from '../../digitalocean';
import { Environment } from '../../conf/environment';
export class DropletService extends DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new Environment();
        this.baseUrl = env.baseUrl;
        Axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        Axios.defaults.headers.common['Content-Type'] = `application/json`;
    }
    /**
     * Create a new droplet
     *
     * @param {DropletRequest} dropletRequest
     * @returns {Promise<Droplet>}
     * @memberof DropletService
     */
    createNewDroplet(dropletRequest) {
        return new Promise((resolve, reject) => {
            Axios.post(`${this.baseUrl}/droplets`, dropletRequest).then((response) => {
                // Return actual droplet instead of wrapped droplet
                resolve(response.data.droplet);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Create multiple droplets with the same specs but different names
     *
     * @param {DropletRequest} dropletsRequest
     * @returns {Promise<Droplet[]>}
     * @memberof DropletService
     */
    createMultipleDroplets(dropletsRequest) {
        return new Promise((resolve, reject) => {
            Axios.post(`${this.baseUrl}/droplets`, dropletsRequest).then((response) => {
                // Return actual droplets instead of wrapped droplets
                resolve(response.data.droplets);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Get a specific existing droplet by ID
     *
     * @param {number} dropletId
     * @returns {Promise<Droplet>}
     * @memberof DropletService
     */
    getExistingDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/droplets/${dropletId}`).then((response) => {
                // Return actual droplet instead of wrapped droplet
                resolve(response.data.droplet);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Get all droplets on the account
     *
     * @returns {Promise<Droplet[]>}
     * @memberof DropletService
     */
    getAllDroplets() {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/droplets`).then((response) => {
                // Return actual droplets instead of wrapped droplets
                resolve(response.data.droplets);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Get all droplets on the account that has a given tag
     *
     * @param {string} tag
     * @returns {Promise<Droplet[]>}
     * @memberof DropletService
     */
    getDropletsByTag(tag) {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/droplets?tag_name=${tag}`).then((response) => {
                // Return actual droplets instead of wrapped droplets
                resolve(response.data.droplets);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Delete a specific droplet by ID
     *
     * @param {string} dropletId
     * @returns {Promise<void>}
     * @memberof DropletService
     */
    deleteDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            Axios.delete(`${this.baseUrl}/droplets/${dropletId}`).then((response) => {
                // Return actual droplets instead of wrapped droplets
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
//# sourceMappingURL=droplet-service.js.map