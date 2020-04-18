import { axios } from '../axios-instance';

import { Domain, DomainRequest } from '../models/domain';

export class DomainService {
  constructor() {}

  /**
   * Get a list of all the domains on your account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const domains = await client.domains.getAllDomains();
   * ```
   */
  public getAllDomains(): Promise<Domain[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/domains`)
        .then(response => {
          // Return actual domains instead of wrapped domains
          resolve(response.data.domains);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Create a new domain on your account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   name: 'example.com',
   *   ip_address: '1.2.3.4'
   * };
   * const domain = await client.domains.createDomain(request);
   * ```
   */
  public createDomain(domainRequest: DomainRequest): Promise<Domain> {
    return new Promise((resolve, reject) => {
      axios
        .post(`/domains`, domainRequest)
        .then(response => {
          // Return actual domain instead of wrapped domain
          resolve(response.data.domain);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get information about a specific domain
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const domain = await client.domains.getExistingDomain('example.com');
   * ```
   */
  public getExistingDomain(domainName: string): Promise<Domain> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/domains/${domainName}`)
        .then(response => {
          // Return actual domain instead of wrapped domain
          resolve(response.data.domain);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete a specific domain from your account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.domains.deleteDomain('example.com');
   * ```
   */
  public deleteDomain(domainName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/domains/${domainName}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
