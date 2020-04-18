import { axios } from '../axios-instance';

import { Action } from '../models/action';

export class ActionService {
  constructor() {}

  /**
   * List all of the actions that have been executed on the current account.
   * Limited to 25 actions per page unless otherwise specified.
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const actions = await client.actions.getAllActions();
   * // Paginate actions, 10 per page, starting on page 1
   * actions = await client.actions.getAllActions(10, 1);
   * ```
   */
  public getAllActions(perPage?: number, page?: number): Promise<Action[]> {
    page = page ? page : 1;
    perPage = perPage ? perPage : 25;
    return new Promise((resolve, reject) => {
      let url = `/actions`;
      url += `?page=${page}`;
      url += `&per_page=${perPage}`;
      axios
        .get(url)
        .then(response => {
          // Return actual actions instead of wrapped actions
          resolve(response.data.actions);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get an existing account action based on the provided ID
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.actions.getExistingAction('specific-action-id');
   * ```
   */
  public getExistingAction(id: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const url = `/actions/${id}`;
      axios
        .get(url)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
