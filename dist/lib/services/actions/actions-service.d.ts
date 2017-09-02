import { DigitalOcean } from '../../digitalocean';
import { Action } from '../../models/action';
export declare class ActionService extends DigitalOcean {
    private baseUrl;
    constructor(accessToken: string);
    /**
     * List all of the actions that have been executed on the current account.
     * Limited to 25 actions per page unless otherwise specified.
     *
     * @param {number} [page]
     * @param {number} [perPage]
     * @returns {Promise<Action[]>}
     * @memberof ActionsService
     */
    getAllActions(perPage?: number, page?: number): Promise<Action[]>;
    /**
     * Get an existing account action based on the provided ID
     *
     * @param {number} id
     * @returns {Promise<Action>}
     * @memberof ActionsService
     */
    getExistingAction(id: number): Promise<Action>;
}
