"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const digitalocean_1 = require("../../digitalocean");
const environment_1 = require("../../conf/environment");
class DropletService extends digitalocean_1.DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new environment_1.Environment();
        this.baseUrl = env.baseUrl;
        axios_1.default.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        axios_1.default.defaults.headers.common['Content-Type'] = `application/json`;
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
            axios_1.default.post(`${this.baseUrl}/droplets`, dropletRequest).then((response) => {
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
            axios_1.default.post(`${this.baseUrl}/droplets`, dropletsRequest).then((response) => {
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
            axios_1.default.get(`${this.baseUrl}/droplets/${dropletId}`).then((response) => {
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
            axios_1.default.get(`${this.baseUrl}/droplets`).then((response) => {
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
            axios_1.default.get(`${this.baseUrl}/droplets?tag_name=${tag}`).then((response) => {
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
            axios_1.default.delete(`${this.baseUrl}/droplets/${dropletId}`).then((response) => {
                // Return actual droplets instead of wrapped droplets
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
exports.DropletService = DropletService;
//# sourceMappingURL=droplet-service.js.map