import { DigitalOcean } from '../../digitalocean';
import { Droplet, DropletRequest } from '../../models/droplet';
export declare class DropletService extends DigitalOcean {
    private baseUrl;
    constructor(accessToken: string);
    /**
     * Create a new droplet
     *
     * @param {DropletRequest} dropletRequest
     * @returns {Promise<Droplet>}
     * @memberof DropletService
     */
    createNewDroplet(dropletRequest: DropletRequest): Promise<Droplet>;
    /**
     * Create multiple droplets with the same specs but different names
     *
     * @param {DropletRequest} dropletsRequest
     * @returns {Promise<Droplet[]>}
     * @memberof DropletService
     */
    createMultipleDroplets(dropletsRequest: DropletRequest): Promise<Droplet[]>;
    /**
     * Get a specific existing droplet by ID
     *
     * @param {number} dropletId
     * @returns {Promise<Droplet>}
     * @memberof DropletService
     */
    getExistingDroplet(dropletId: number): Promise<Droplet>;
    /**
     * Get all droplets on the account
     *
     * @returns {Promise<Droplet[]>}
     * @memberof DropletService
     */
    getAllDroplets(): Promise<Droplet[]>;
    /**
     * Get all droplets on the account that has a given tag
     *
     * @param {string} tag
     * @returns {Promise<Droplet[]>}
     * @memberof DropletService
     */
    getDropletsByTag(tag: string): Promise<Droplet[]>;
    /**
     * Delete a specific droplet by ID
     *
     * @param {string} dropletId
     * @returns {Promise<void>}
     * @memberof DropletService
     */
    deleteDroplet(dropletId: string): Promise<void>;
}
