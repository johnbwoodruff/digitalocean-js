import { DigitalOcean } from '../../digitalocean';
import { Action } from '../../models/action';
export declare class DropletActionService extends DigitalOcean {
    private baseUrl;
    constructor(accessToken: string);
    /**
     * Enable backups on an existing droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    enableBackupsForDroplet(dropletId: number): Promise<Action>;
    /**
     * Disable backups on an existing droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    disableBackupsForDroplet(dropletId: number): Promise<Action>;
    /**
     * Reboot a droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    rebootDroplet(dropletId: number): Promise<Action>;
    /**
     * Power cycle a droplet (power off then on)
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    powerCycleDroplet(dropletId: number): Promise<Action>;
    /**
     * Shutdown a droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    shutdownDroplet(dropletId: number): Promise<Action>;
    /**
     * Power off a droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    powerOffDroplet(dropletId: number): Promise<Action>;
    /**
     * Power on a droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    powerOnDroplet(dropletId: number): Promise<Action>;
    /**
     * Restore a droplet using a backup image
     *
     * @param {number} dropletId
     * @param {(string | number)} image
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    restoreDroplet(dropletId: number, image: string | number): Promise<Action>;
    /**
     * Reset the password for a droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    passwordResetDroplet(dropletId: number): Promise<Action>;
    /**
     * Resize a droplet
     *
     * @param {number} dropletId
     * @param {boolean} resizeDisk
     * @param {string} size
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    resizeDroplet(dropletId: number, resizeDisk: boolean, size: string): Promise<Action>;
    /**
     * Rebuild a droplet
     *
     * @param {number} dropletId
     * @param {(string | number)} image
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    rebuildDroplet(dropletId: number, image: string | number): Promise<Action>;
    /**
     * Rename a droplet
     *
     * @param {number} dropletId
     * @param {string} name
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    renameDroplet(dropletId: number, name: string): Promise<Action>;
    /**
     * Change the kernel of a droplet
     *
     * @param {number} dropletId
     * @param {number} kernelId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    changeDropletKernel(dropletId: number, kernelId: number): Promise<Action>;
    /**
     * Enable IPv6 networking on an existing droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    enableIPv6(dropletId: number): Promise<Action>;
    /**
     * Enable private networking on an existing droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    enablePrivateNetworking(dropletId: number): Promise<Action>;
    /**
     * Take a snapshot of a droplet
     *
     * @param {number} dropletId
     * @param {string} name
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    snapshotDroplet(dropletId: number, name: string): Promise<Action>;
    /**
     * Get a specific droplet action
     *
     * @param {number} dropletId
     * @param {number} actionId
     * @returns {Promise<Action>}
     * @memberof DropletService
     */
    getExistingDropletAction(dropletId: number, actionId: number): Promise<Action>;
}
