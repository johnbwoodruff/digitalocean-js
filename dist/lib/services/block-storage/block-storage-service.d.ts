import { DigitalOcean } from '../../digitalocean';
import { BlockStorage, BlockStorageRequest } from '../../models/block-storage';
import { Snapshot } from '../../models/snapshot';
export declare class BlockStorageService extends DigitalOcean {
    private baseUrl;
    constructor(accessToken: string);
    /**
     * List all of the Block Storage volumes available on your account
     *
     * @returns {Promise<BlockStorage[]>}
     * @memberof BlockStorageService
     */
    getAllBlockStorage(): Promise<BlockStorage[]>;
    /**
     * Create a new Block Storage volume
     *
     * @param {BlockStorageRequest} volume
     * @returns {Promise<BlockStorage>}
     * @memberof BlockStorageService
     */
    createBlockStorage(volume: BlockStorageRequest): Promise<BlockStorage>;
    /**
     * Get a single Block Storage volume by ID
     *
     * @param {string} id
     * @returns {Promise<BlockStorage>}
     * @memberof BlockStorageService
     */
    getBlockStorageById(id: string): Promise<BlockStorage>;
    /**
     * Get Block Storage volumes by name and region
     *
     * @param {string} name
     * @param {string} regionSlug
     * @returns {Promise<BlockStorage[]>}
     * @memberof BlockStorageService
     */
    getBlockStorageByName(name: string, regionSlug: string): Promise<BlockStorage[]>;
    /**
     * Get snapshots that have been created from a Block Storage volume
     *
     * @param {string} id
     * @returns {Promise<Snapshot[]>}
     * @memberof BlockStorageService
     */
    getSnapshotsForVolume(id: string): Promise<Snapshot[]>;
    /**
     * Create a snapshot from a Block Storage volume
     *
     * @param {string} id
     * @param {string} name
     * @returns {Promise<Snapshot>}
     * @memberof BlockStorageService
     */
    createSnapshotFromVolume(id: string, name: string): Promise<Snapshot>;
    /**
     * Delete a Block Storage volume by ID
     *
     * @param {string} id
     * @returns {Promise<void>}
     * @memberof BlockStorageService
     */
    deleteBlockStorageById(id: string): Promise<void>;
    /**
     * Delete a Block Storage volume by name and region
     *
     * @param {string} name
     * @param {string} regionSlug
     * @returns {Promise<void>}
     * @memberof BlockStorageService
     */
    deleteBlockStorageByName(name: string, regionSlug: string): Promise<void>;
}
