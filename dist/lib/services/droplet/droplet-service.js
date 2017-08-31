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
     * Retrieve a list of all kernels available to a Droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Kernel[]>}
     * @memberof DropletService
     */
    getAvailableKernelsForDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/droplets/${dropletId}/kernels`).then((response) => {
                // Return actual kernels instead of wrapped kernels
                resolve(response.data.kernels);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Retrieve the snapshots that have been created from a Droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Snapshot[]>}
     * @memberof DropletService
     */
    getSnapshotsForDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/droplets/${dropletId}/snapshots`).then((response) => {
                // Return actual snapshots instead of wrapped snapshots
                resolve(response.data.snapshots);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Retrieve any backups associated with a Droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Backup[]>}
     * @memberof DropletService
     */
    getBackupsForDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/droplets/${dropletId}/backups`).then((response) => {
                // Return actual backups instead of wrapped backups
                resolve(response.data.backups);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Retrieve all actions that have been executed on a Droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action[]>}
     * @memberof DropletService
     */
    getDropletActions(dropletId) {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/droplets/${dropletId}/actions`).then((response) => {
                // Return actual actions instead of wrapped actions
                resolve(response.data.actions);
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
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Delete Droplets by a tag
     *
     * @param {string} tag
     * @returns {Promise<void>}
     * @memberof DropletService
     */
    deleteDropletsByTag(tag) {
        return new Promise((resolve, reject) => {
            Axios.delete(`${this.baseUrl}/droplets?tag_name=${tag}`).then((response) => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Retrieve a list of Droplets that are running on the same physical server
     *
     * @param {number} dropletId
     * @returns {Promise<Droplet[]>}
     * @memberof DropletService
     */
    getNeighborsForDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            Axios.delete(`${this.baseUrl}/droplets/${dropletId}/neighbors`).then((response) => {
                // Return actual droplets instead of wrapped droplets
                resolve(response.data.droplets);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Retrieve a list of any Droplets that are running on the same physical hardware
     *
     * @returns {Promise<Droplet[][]>}
     * @memberof DropletService
     */
    getDropletNeighbors() {
        return new Promise((resolve, reject) => {
            Axios.delete(`${this.baseUrl}/reports/droplet_neighbors`).then((response) => {
                // Return actual neighbors instead of wrapped neighbors
                resolve(response.data.neighbors);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
//# sourceMappingURL=droplet-service.js.map