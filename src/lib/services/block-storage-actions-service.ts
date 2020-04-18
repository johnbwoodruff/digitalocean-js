import { axios } from '../axios-instance';

import { Action, ActionRequest } from '../models/action';

export class BlockStorageActionService {
  constructor() {}

  /**
   * Attach a Block Storage volume to a droplet
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   type: 'attach',
   *   droplet_id: 11612190,
   *   region: 'nyc1'
   * }
   * const action = await client.blockStorageActions
   *    .attachVolumeToDroplet('volume-id', request);
   * ```
   */
  public attachVolumeToDroplet(
    volumeId: string,
    actionRequest: ActionRequest
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      if (!this.attachActionIsValid(actionRequest)) {
        throw new Error('Required fields missing from Action Object');
      }
      axios
        .post(`/volumes/${volumeId}/actions`, actionRequest)
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
   * Attach a Block Storage volume to a droplet using the volume name
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   type: 'attach',
   *   volume_name: 'example',
   *   region: 'nyc1',
   *   droplet_id: 116121901
   * }
   * const action = await client.blockStorageActions
   *    .attachVolumeToDropletByName(request);
   * ```
   */
  public attachVolumeToDropletByName(
    actionRequest: ActionRequest
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      if (!this.attachActionByNameIsValid(actionRequest)) {
        throw new Error('Required fields missing from Action Object');
      }
      axios
        .post(`/volumes/actions`, actionRequest)
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
   * Detach a Block Storage volume from a droplet
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   type: 'detach',
   *   droplet_id: 11612190,
   *   region: 'nyc1'
   * }
   * const action = await client.blockStorageActions
   *    .detachVolumeFromDroplet('volume-id', request);
   * ```
   */
  public detachVolumeFromDroplet(
    volumeId: string,
    actionRequest: ActionRequest
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      if (!this.attachActionIsValid(actionRequest)) {
        throw new Error('Required fields missing from Action Object');
      }
      axios
        .post(`/volumes/${volumeId}/actions`, actionRequest)
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
   * Detach a Block Storage volume from a droplet using the volume name
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   type: 'detach',
   *   volume_name: 'example',
   *   region: 'nyc1',
   *   droplet_id: 116121901
   * }
   * const action = await client.blockStorageActions
   *    .detachVolumeFromDropletByName(request);
   * ```
   */
  public detachVolumeFromDropletByName(
    actionRequest: ActionRequest
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      if (!this.attachActionByNameIsValid(actionRequest)) {
        throw new Error('Required fields missing from Action Object');
      }
      axios
        .post(`/volumes/actions`, actionRequest)
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
   * Resize a Block Storage volume
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   type: 'resize',
   *   size_gigabytes: 100,
   *   region: 'nyc1'
   * }
   * const action = await client.blockStorageActions
   *    .resizeVolume('volume-id', request);
   * ```
   */
  public resizeVolume(
    volumeId: string,
    actionRequest: ActionRequest
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      if (!this.resizeActionIsValid(actionRequest)) {
        throw new Error('Required fields missing from Action Object');
      }
      axios
        .post(`/volumes/${volumeId}/actions`, actionRequest)
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
   * List all actions that have been executed on the specified volume.
   * Limited to 25 actions per page unless otherwise specified.
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const actions = await client.blockStorageActions.getAllVolumeActions('volume-id');
   * // Paginate actions, 10 per page, starting on page 1
   * actions = await client.blockStorageActions
   *    .getAllVolumeActions('volume-id', 10, 1);
   * ```
   */
  public getAllVolumeActions(
    volumeId: string,
    perPage?: number,
    page?: number
  ): Promise<Action[]> {
    page = page ? page : 1;
    perPage = perPage ? perPage : 25;
    return new Promise((resolve, reject) => {
      let url = `/volumes/${volumeId}/actions`;
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
   * Get an existing volume action based on the provided ID
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.blockStorageActions
   *    .getExistingVolumeAction('volume-id', 'action-id');
   * ```
   */
  public getExistingVolumeAction(
    volumeId: string,
    actionId: number
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/volumes/${volumeId}/actions/${actionId}`)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  ////////// Validation Methods //////////
  private attachActionIsValid(action: ActionRequest): boolean {
    if (!action.type || !action.droplet_id) {
      return false;
    }
    return true;
  }

  private attachActionByNameIsValid(action: ActionRequest): boolean {
    if (!this.attachActionIsValid(action) || !action.volume_name) {
      return false;
    }
    return true;
  }

  private resizeActionIsValid(action: ActionRequest): boolean {
    if (!action.type || !action.size_gigabytes) {
      return false;
    }
    return true;
  }
}
