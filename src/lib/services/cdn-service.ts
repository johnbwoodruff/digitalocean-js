import { axios } from '../axios-instance';

import { CdnEndpoint, CdnEndpointRequest } from '../models/cdn';

export class CdnService {
  constructor() {}

  /**
   * List all of the CDN endpoints available on your account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const endpoints = await client.cdn.getAllEndpoints();
   * ```
   */
  public getAllEndpoints(): Promise<CdnEndpoint[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/cdn/endpoints`)
        .then(response => {
          // Return actual endpoints instead of wrapped endpoints
          resolve(response.data.endpoints);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get an existing CDN endpoint
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const endpoint = await client.cdn.getExistingEndpoint('endpoint-id');
   * ```
   */
  public getExistingEndpoint(id: string): Promise<CdnEndpoint> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/cdn/endpoints/${id}`)
        .then(response => {
          // Return actual endpoint instead of wrapped endpoint
          resolve(response.data.endpoint);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Create a new CDN endpoint
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   "origin": "static-images.nyc3.digitaloceanspaces.com",
   *   "ttl": 3600
   * };
   * const endpoint = await client.cdn.createEndpoint(request);
   * ```
   */
  public createEndpoint(endpoint: CdnEndpointRequest): Promise<CdnEndpoint> {
    return new Promise((resolve, reject) => {
      if (!this.endpointIsValid(endpoint)) {
        throw new Error('Required fields missing from Endpoint Object');
      }
      axios
        .post(`/cdn/endpoints`, endpoint)
        .then(response => {
          // Return actual endpoint instead of wrapped endpoint
          resolve(response.data.endpoint);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Update the ttl of an existing CDN endpoint
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const endpoint = await client.cdn.updateEndpoint('endpoint-id', 1800);
   * ```
   */
  public updateEndpoint(id: string, ttl: number): Promise<CdnEndpoint> {
    return new Promise((resolve, reject) => {
      axios
        .put(`/cdn/endpoints/${id}`, { ttl })
        .then(response => {
          // Return actual endpoint instead of wrapped endpoint
          resolve(response.data.endpoint);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete an existing CDN endpoint
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const endpoint = await client.cdn.deleteEndpoint('endpoint-id');
   * ```
   */
  public deleteEndpoint(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/cdn/endpoints/${id}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Purge cached content from a CDN endpoint
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const files = [
   *   'assets/img/hero.png',
   *   'assets/css/*'
   * ];
   * const endpoint = await client.cdn.purgeEndpointCache('endpoint-id', files);
   * ```
   */
  public purgeEndpointCache(id: string, files: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/cdn/endpoints/${id}/cache`, {
          data: { files }
        })
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  ////////// Validation Methods //////////
  private endpointIsValid(end: CdnEndpointRequest): boolean {
    if (!end.origin) {
      return false;
    }
    return true;
  }
}
