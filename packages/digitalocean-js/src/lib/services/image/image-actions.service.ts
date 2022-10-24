import { Action } from '../../models';

import { instance } from '../../axios-instance';

export class ImageActionService {
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
    const request = {
      region,
      type: 'transfer'
    };
    return instance
      .post(`/images/${imageId}/actions`, request)
      .then(response => response.data.action);
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
    const request = {
      type: 'convert'
    };
    return instance
      .post(`/images/${imageId}/actions`, request)
      .then(response => response.data.action);
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
    return instance
      .get(`/images/${imageId}/actions/${actionId}`)
      .then(response => response.data.action);
  }
}
