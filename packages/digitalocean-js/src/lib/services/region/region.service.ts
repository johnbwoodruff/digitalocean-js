import { Region } from '../../models';

import { instance } from '../../axios-instance';

export class RegionService {
  /**
   * Get all regions
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const regions = await client.regions.getAllRegions();
   * ```
   */
  public getAllRegions(): Promise<Region[]> {
    return instance.get(`/regions`).then(response => response.data.regions);
  }
}
