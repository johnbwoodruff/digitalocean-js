import Axios from 'axios';
import { DigitalOcean } from '../../digitalocean';
import { Environment } from '../../conf/environment';
export class DropletActionService extends DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new Environment();
        this.baseUrl = env.baseUrl;
        Axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        Axios.defaults.headers.common['Content-Type'] = `application/json`;
    }
    /**
     * Enable backups on an existing droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    enableBackupsForDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'enable_backups'
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Disable backups on an existing droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    disableBackupsForDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'disable_backups'
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Reboot a droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    rebootDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'reboot'
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Power cycle a droplet (power off then on)
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    powerCycleDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'power_cycle'
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Shutdown a droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    shutdownDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'shutdown'
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Power off a droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    powerOffDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'power_off'
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Power on a droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    powerOnDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'power_on'
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Restore a droplet using a backup image
     *
     * @param {number} dropletId
     * @param {(string | number)} image
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    restoreDroplet(dropletId, image) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'restore',
                image: image
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Reset the password for a droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    passwordResetDroplet(dropletId) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'password_reset'
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Resize a droplet
     *
     * @param {number} dropletId
     * @param {boolean} resizeDisk
     * @param {string} size
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    resizeDroplet(dropletId, resizeDisk, size) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'password_reset',
                disk: resizeDisk,
                size: size
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Rebuild a droplet
     *
     * @param {number} dropletId
     * @param {(string | number)} image
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    rebuildDroplet(dropletId, image) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'rebuild',
                image: image
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Rename a droplet
     *
     * @param {number} dropletId
     * @param {string} name
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    renameDroplet(dropletId, name) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'rename',
                name: name
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Change the kernel of a droplet
     *
     * @param {number} dropletId
     * @param {number} kernelId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    changeDropletKernel(dropletId, kernelId) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'change_kernel',
                kernel: kernelId
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Enable IPv6 networking on an existing droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    enableIPv6(dropletId) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'enable_ipv6'
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Enable private networking on an existing droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    enablePrivateNetworking(dropletId) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'enable_private_networking'
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Take a snapshot of a droplet
     *
     * @param {number} dropletId
     * @param {string} name
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    snapshotDroplet(dropletId, name) {
        return new Promise((resolve, reject) => {
            const actionRequest = {
                type: 'snapshot',
                name: name
            };
            Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    // TODO: Implement the bulk action method, Acting on Tagged Droplets
    /**
     * Get a specific droplet action
     *
     * @param {number} dropletId
     * @param {number} actionId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    getExistingDropletAction(dropletId, actionId) {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/droplets/${dropletId}/actions/${actionId}`).then((response) => {
                // Return actual action instead of wrapped action
                resolve(response.data.action);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
//# sourceMappingURL=droplet-actions-service.js.map