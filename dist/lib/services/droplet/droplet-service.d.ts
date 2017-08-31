import { DigitalOcean } from '../../digitalocean';
import { Droplet, DropletRequest } from '../../models/droplet';
import { Kernel } from '../../models/kernel';
import { Snapshot } from '../../models/snapshot';
import { Backup } from '../../models/backup';
import { Action } from '../../models/action';
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
     * Retrieve a list of all kernels available to a Droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Kernel[]>}
     * @memberof DropletService
     */
    getAvailableKernelsForDroplet(dropletId: number): Promise<Kernel[]>;
    /**
     * Retrieve the snapshots that have been created from a Droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Snapshot[]>}
     * @memberof DropletService
     */
    getSnapshotsForDroplet(dropletId: number): Promise<Snapshot[]>;
    /**
     * Retrieve any backups associated with a Droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Backup[]>}
     * @memberof DropletService
     */
    getBackupsForDroplet(dropletId: number): Promise<Backup[]>;
    /**
     * Retrieve all actions that have been executed on a Droplet
     *
     * @param {number} dropletId
     * @returns {Promise<Action[]>}
     * @memberof DropletService
     */
    getDropletActions(dropletId: number): Promise<Action[]>;
    /**
     * Delete a specific droplet by ID
     *
     * @param {string} dropletId
     * @returns {Promise<void>}
     * @memberof DropletService
     */
    deleteDroplet(dropletId: number): Promise<void>;
    /**
     * Delete Droplets by a tag
     *
     * @param {string} tag
     * @returns {Promise<void>}
     * @memberof DropletService
     */
    deleteDropletsByTag(tag: string): Promise<void>;
    /**
     * Retrieve a list of Droplets that are running on the same physical server
     *
     * @param {number} dropletId
     * @returns {Promise<Droplet[]>}
     * @memberof DropletService
     */
    getNeighborsForDroplet(dropletId: number): Promise<Droplet[]>;
    /**
     * Retrieve a list of any Droplets that are running on the same physical hardware
     *
     * @returns {Promise<Droplet[][]>}
     * @memberof DropletService
     */
    getDropletNeighbors(): Promise<Droplet[][]>;
}
