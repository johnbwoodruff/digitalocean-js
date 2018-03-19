import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { DomainRecord, DomainRecordRequest } from '../models/domain-record';

export class DomainRecordService {
  constructor() {}

  /**
   * Get all records configured for a domain
   */
  public getAllDomainRecords(domainName: string): Promise<DomainRecord[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/domains/${domainName}/records`)
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
   */
  public createDomainRecord(
    domainName: string,
    domainRequest: DomainRecordRequest
  ): Promise<DomainRecord> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/domains/${domainName}/records`, domainRequest)
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
   */
  public getExistingDomainRecord(
    domainName: string,
    recordId: number
  ): Promise<DomainRecord> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/domains/${domainName}/records/${recordId}`)
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
   */
  public updateDomainRecord(
    domainName: string,
    recordId: number,
    domainRequest: DomainRecordRequest
  ): Promise<DomainRecord> {
    return new Promise((resolve, reject) => {
      Axios.put(
        `${API_BASE_URL}/domains/${domainName}/records/${recordId}`,
        domainRequest
      )
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
   */
  public deleteDomainRecord(
    domainName: string,
    recordId: number
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${API_BASE_URL}/domains/${domainName}/records/${recordId}`)
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
