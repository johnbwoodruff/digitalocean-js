import { Action } from '../models/action';
export declare class ActionsService {
    private key;
    private env;
    constructor();
    /**
     * List all of the actions that have been executed on the current account.
     * Limited to 25 actions per page unless otherwise specified.
     *
     * @param {number} [page]
     * @param {number} [perPage]
     * @returns {Promise<Action[]>}
     * @memberof ActionsService
     */
    getAllActions(page?: number, perPage?: number): Promise<Action[]>;
    /**
     * Returns an existing action based on the provided ID
     *
     * @param {number} id
     * @returns {Promise<Action>}
     * @memberof ActionsService
     */
    getExistingAction(id: number): Promise<Action>;
}
