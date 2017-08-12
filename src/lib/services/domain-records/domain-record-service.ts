import Axios from 'axios';

// TODO: Remove ApiKey when OAuth is implemented
import { ApiKey } from '../../conf/api-key';
import { Environment } from '../../conf/environment';
import { DomainRecord, DomainRecordRequest } from '../../models/domain-record';

export class DomainRecordService {
  private key: string;
  private baseUrl: string;

  constructor() {
    const env = new Environment();
    this.baseUrl = env.baseUrl;
    this.key = ApiKey;
    Axios.defaults.headers.common['Authorization'] = `Bearer ${this.key}`;
    Axios.defaults.headers.common['Content-Type'] = `application/json`;
  }

  /**
   * Get all records configured for a domain
   *
   * @param {string} domainName
   * @returns {Promise<DomainRecord[]>}
   * @memberof DomainRecordService
   */
  public getAllDomainRecords(domainName: string): Promise<DomainRecord[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/domains/${domainName}/records`).then((response) => {
        // Return actual domain_records instead of wrapped domain_records
        resolve(response.data.domain_records);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Create a new record for a domain
   *
   * @param {string} domainName
   * @param {DomainRecordRequest} domainRequest
   * @returns {Promise<DomainRecord>}
   * @memberof DomainRecordService
   */
  public createDomainRecord(domainName: string, domainRequest: DomainRecordRequest): Promise<DomainRecord> {
    return new Promise((resolve, reject) => {
      Axios.post(`${this.baseUrl}/domains/${domainName}/records`, domainRequest).then((response) => {
        // Return actual domain_record instead of wrapped domain_record
        resolve(response.data.domain_record);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Get a specific existing domain record
   *
   * @param {string} domainName
   * @param {number} recordId
   * @returns {Promise<DomainRecord>}
   * @memberof DomainRecordService
   */
  public getExistingDomainRecord(domainName: string, recordId: number): Promise<DomainRecord> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/domains/${domainName}/records/${recordId}`).then((response) => {
        // Return actual domain_record instead of wrapped domain_record
        resolve(response.data.domain_record);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Update an existing domain record
   *
   * @param {string} domainName
   * @param {number} recordId
   * @param {DomainRecordRequest} domainRequest
   * @returns {Promise<DomainRecord>}
   * @memberof DomainRecordService
   */
  public updateDomainRecord(domainName: string, recordId: number, domainRequest: DomainRecordRequest): Promise<DomainRecord> {
    return new Promise((resolve, reject) => {
      Axios.put(`${this.baseUrl}/domains/${domainName}/records/${recordId}`, domainRequest).then((response) => {
        // Return actual domain_record instead of wrapped domain_record
        resolve(response.data.domain_record);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Delete a record for a domain
   *
   * @param {string} domainName
   * @param {number} recordId
   * @returns {Promise<void>}
   * @memberof DomainRecordService
   */
  public deleteDomainRecord(domainName: string, recordId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${this.baseUrl}/domains/${domainName}/records/${recordId}`).then((response) => {
        // Return actual domain_record instead of wrapped domain_record
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
}
