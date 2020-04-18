import { axios } from '../axios-instance';

import { Action } from '../models/action';

export class ImageActionService {
  constructor() {}

  /**
   * Transfer an image to another region
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.imageActions.transferImage('image-id', 'nyc1');
   * ```
   */
  public transferImage(imageId: number, region: string): Promise<Action> {
    return new Promise((resolve, reject) => {
      const request = {
        region,
        type: 'transfer'
      };
      axios
        .post(`/images/${imageId}/actions`, request)
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
   * Convert an image (a backup for example) to a snapshot
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.imageActions.convertImageToSnapshot('image-id');
   * ```
   */
  public convertImageToSnapshot(imageId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const request = {
        type: 'convert'
      };
      axios
        .post(`/images/${imageId}/actions`, request)
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
   * Retrieve the status of an image action
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.imageActions.getExistingImageAction('image-id', 'action-id');
   * ```
   */
  public getExistingImageAction(
    imageId: number,
    actionId: number
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/images/${imageId}/actions/${actionId}`)
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
