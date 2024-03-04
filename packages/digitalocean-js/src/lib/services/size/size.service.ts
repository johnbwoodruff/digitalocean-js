import { Size } from '../../models';

import { instance } from '../../axios-instance';

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
  public getAllSizes(perPage?: number, page?: number): Promise<Size[]> {
    page = page ? page : 1;
    perPage = perPage ? perPage : 25;
    return instance
      .get(`/sizes`, { params: { page, per_page: perPage } })
      .then(response => response.data.sizes);
  }
}
