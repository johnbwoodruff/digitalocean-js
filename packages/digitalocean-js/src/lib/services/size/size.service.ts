import { Size } from "../../models";

import { instance } from "../../axios-instance";

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
    return instance
      .get(`/sizes`, { params: { per_page: 500 } })
      .then((response) => response.data.sizes);
  }
}
