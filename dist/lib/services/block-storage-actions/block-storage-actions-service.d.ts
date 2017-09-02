import { DigitalOcean } from '../../digitalocean';
import { Action, ActionRequest } from '../../models/action';
export declare class BlockStorageActionService extends DigitalOcean {
    private baseUrl;
    constructor(accessToken: string);
    /**
     * Attach a Block Storage volume to a droplet
     *
     * @param {string} volumeId
     * @param {ActionRequest} actionRequest
     * @returns {Promise<Action>}
     * @memberof BlockStorageActionsService
     */
    attachVolumeToDroplet(volumeId: string, actionRequest: ActionRequest): Promise<Action>;
    /**
     * Attach a Block Storage volume to a droplet using the volume name
     *
     * @param {ActionRequest} actionRequest
     * @returns {Promise<Action>}
     * @memberof BlockStorageActionsService
     */
    attachVolumeToDropletByName(actionRequest: ActionRequest): Promise<Action>;
    /**
     * Detach a Block Storage volume from a droplet
     *
     * @param {string} volumeId
     * @param {ActionRequest} actionRequest
     * @returns {Promise<Action>}
     * @memberof BlockStorageActionsService
     */
    detachVolumeFromDroplet(volumeId: string, actionRequest: ActionRequest): Promise<Action>;
    /**
     * Detach a Block Storage volume from a droplet using the volume name
     *
     * @param {ActionRequest} actionRequest
     * @returns {Promise<Action>}
     * @memberof BlockStorageActionsService
     */
    detachVolumeFromDropletByName(actionRequest: ActionRequest): Promise<Action>;
    /**
     * Resize a Block Storage volume
     *
     * @param {string} volumeId
     * @param {ActionRequest} actionRequest
     * @returns {Promise<Action>}
     * @memberof BlockStorageActionsService
     */
    resizeVolume(volumeId: string, actionRequest: ActionRequest): Promise<Action>;
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
    getAllVolumeActions(volumeId: string, perPage?: number, page?: number): Promise<Action[]>;
    /**
     * Get an existing volume action based on the provided ID
     *
     * @param {string} volumeId
     * @param {number} actionId
     * @returns {Promise<Action>}
     * @memberof BlockStorageActionsService
     */
    getExistingVolumeAction(volumeId: string, actionId: number): Promise<Action>;
}
