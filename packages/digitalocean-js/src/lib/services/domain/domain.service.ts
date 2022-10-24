import { Domain, DomainRequest } from '../../models';

import { instance } from '../../axios-instance';

export class DomainService {
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
    return instance.get(`/domains`).then(response => response.data.domains);
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
    return instance
      .post(`/domains`, domainRequest)
      .then(response => response.data.domain);
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
    return instance
      .get(`/domains/${domainName}`)
      .then(response => response.data.domain);
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
    return instance.delete(`/domains/${domainName}`);
  }
}
