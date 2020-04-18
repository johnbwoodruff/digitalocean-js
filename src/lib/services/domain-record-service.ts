import { axios } from '../axios-instance';

import { DomainRecord, DomainRecordRequest } from '../models/domain-record';

export class DomainRecordService {
  constructor() {}

  /**
   * Get all records configured for a domain
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const records = await client.domainRecords.getAllDomainRecords('example.com');
   * ```
   */
  public getAllDomainRecords(domainName: string): Promise<DomainRecord[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/domains/${domainName}/records`)
        .then(response => {
          // Return actual domain_records instead of wrapped domain_records
          resolve(response.data.domain_records);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Create a new record for a domain
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   type: 'A',
   *   name: 'www',
   *   data: '162.10.66.0',
   *   priority: null,
   *   port: null,
   *   ttl: 1800,
   *   weight: null,
   *   flags: null,
   *   tag: null
   * };
   * const record = await client.domainRecords
   *    .createDomainRecord('example.com', request);
   * ```
   */
  public createDomainRecord(
    domainName: string,
    domainRequest: DomainRecordRequest
  ): Promise<DomainRecord> {
    return new Promise((resolve, reject) => {
      axios
        .post(`/domains/${domainName}/records`, domainRequest)
        .then(response => {
          // Return actual domain_record instead of wrapped domain_record
          resolve(response.data.domain_record);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get a specific existing domain record
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const record = await client.domainRecords
   *    .getExistingDomainRecord('example.com', 'record-id');
   * ```
   */
  public getExistingDomainRecord(
    domainName: string,
    recordId: number
  ): Promise<DomainRecord> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/domains/${domainName}/records/${recordId}`)
        .then(response => {
          // Return actual domain_record instead of wrapped domain_record
          resolve(response.data.domain_record);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Update an existing domain record
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   // Any valid domain record attribute can be changed
   *   name: 'blog'
   * };
   * const record = await client.domainRecords
   *    .updateDomainRecord('example.com', 'record-id', request);
   * ```
   */
  public updateDomainRecord(
    domainName: string,
    recordId: number,
    domainRequest: DomainRecordRequest
  ): Promise<DomainRecord> {
    return new Promise((resolve, reject) => {
      axios
        .put(`/domains/${domainName}/records/${recordId}`, domainRequest)
        .then(response => {
          // Return actual domain_record instead of wrapped domain_record
          resolve(response.data.domain_record);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete a record for a domain
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.domainRecords.deleteDomainRecord('example.com', 'record-id');
   * ```
   */
  public deleteDomainRecord(
    domainName: string,
    recordId: number
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/domains/${domainName}/records/${recordId}`)
        .then(() => {
          // Return actual domain_record instead of wrapped domain_record
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
