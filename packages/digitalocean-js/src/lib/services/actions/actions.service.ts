import { Action } from '../../models';

import { instance } from '../../axios-instance';

export class ActionService {
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
    return instance
      .get('/actions', {
        params: {
          page,
          per_page: perPage
        }
      })
      .then(response => response.data.actions);
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
    return instance
      .get(`/actions/${id}`)
      .then(response => response.data.action);
  }
}
