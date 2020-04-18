import { axios } from '../axios-instance';

import { Action } from '../models/action';

export class FloatingIPActionService {
  constructor() {}

  /**
   * Assign an existing Floating IP to a Droplet
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.floatingIPActions
   *    .assignFloatingIPToDroplet('1.2.3.4', 'droplet-id');
   * ```
   */
  public assignFloatingIPToDroplet(
    floatingIPAddress: string,
    dropletId: string
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      const request = {
        droplet_id: dropletId,
        type: 'assign'
      };
      axios
        .post(`/floating_ips/${floatingIPAddress}/actions`, request)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Unassign an existing Floating IP
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.floatingIPActions
   *    .unassignFloatingIP('1.2.3.4');
   * ```
   */
  public unassignFloatingIP(floatingIPAddress: string): Promise<Action> {
    return new Promise((resolve, reject) => {
      const request = {
        type: 'unassign'
      };
      axios
        .post(`/floating_ips/${floatingIPAddress}/actions`, request)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Retrieve all actions that have been executed on a Floating IP
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const actions = await client.floatingIPActions
   *    .getAllFloatingIPActions('1.2.3.4');
   * ```
   */
  public getAllFloatingIPActions(floatingIPAddress: string): Promise<Action[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/floating_ips/${floatingIPAddress}/actions`)
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
   * Retrieve the status of a Floating IP action
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.floatingIPActions
   *    .getExistingFloatingIPAction('1.2.3.4', 'action-id');
   * ```
   */
  public getExistingFloatingIPAction(
    floatingIPAddress: string,
    actionId: string
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/floating_ips/${floatingIPAddress}/actions/${actionId}`)
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
