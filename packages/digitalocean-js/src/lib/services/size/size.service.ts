import { instance } from '../../axios-instance';

import { Size } from '../../models/size';

export class SizeService {
  /**
   * Get all sizes
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const sizes = await client.sizes.getAllSizes();
   * ```
   */
  public getAllSizes(): Promise<Size[]> {
    return instance.get(`/sizes`).then(response => response.data.sizes);
  }
}
