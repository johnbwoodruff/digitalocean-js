import { axios } from '../axios-instance';

import { FloatingIP } from '../models/floating-ip';

export class FloatingIPService {
  constructor() {}

  /**
   * List all of the Floating IPs available on your account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const floatingIPs = await client.floatingIPs.getAllFloatingIPs();
   * ```
   */
  public getAllFloatingIPs(): Promise<FloatingIP> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/floating_ips`)
        .then(response => {
          // Return actual floating ips instead of wrapped floating ips
          resolve(response.data.floating_ips);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Create a new Floating IP assigned to a Droplet
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const floatingIP =
   *    await client.floatingIPs.createFloatingIPForDroplet('droplet-id');
   * ```
   */
  public createFloatingIPForDroplet(dropletId: string): Promise<FloatingIP> {
    return new Promise((resolve, reject) => {
      const request = { droplet_id: dropletId };
      axios
        .post(`/floating_ips`, request)
        .then(response => {
          // Return actual floating ip instead of wrapped floating ip
          resolve(response.data.floating_ip);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Create a Floating IP reserved to a Region
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const floatingIP =
   *    await client.floatingIPs.createFloatingIPForRegion('nyc3');
   * ```
   */
  public createFloatingIPForRegion(region: string): Promise<FloatingIP> {
    return new Promise((resolve, reject) => {
      axios
        .post(`/floating_ips`, { region })
        .then(response => {
          resolve(response.data.floating_ip);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Show information about an existing Floating IP
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const floatingIP =
   *    await client.floatingIPs.getExistingFloatingIP('1.2.3.4');
   * ```
   */
  public getExistingFloatingIP(floatingIPAddress: string): Promise<FloatingIP> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/floating_ips/${floatingIPAddress}`)
        .then(response => {
          resolve(response.data.floating_ip);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete an existing Floating IP and remove it from your account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.floatingIPs.deleteFloatingIP('1.2.3.4');
   * ```
   */
  public deleteFloatingIP(floatingIPAddress: string): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/floating_ips/${floatingIPAddress}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
