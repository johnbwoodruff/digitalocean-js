import Axios from 'axios';

// TODO: Remove ApiKey when OAuth is implemented
import { ApiKey } from '../../conf/api-key';
import { Environment } from '../../conf/environment';
import { Domain, DomainRequest } from '../../models/domain';

export class DomainService {
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
   * Get a list of all the domains on your account
   *
   * @returns {Promise<Domain[]>}
   * @memberof DomainService
   */
  public getAllDomains(): Promise<Domain[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/domains`).then((response) => {
        // Return actual domains instead of wrapped domains
        resolve(response.data.domains);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Create a new domain on your account
   *
   * @param {DomainRequest} domainRequest
   * @returns {Promise<Domain>}
   * @memberof DomainService
   */
  public createDomain(domainRequest: DomainRequest): Promise<Domain> {
    return new Promise((resolve, reject) => {
      Axios.post(`${this.baseUrl}/domains`, domainRequest).then((response) => {
        // Return actual domain instead of wrapped domain
        resolve(response.data.domain);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Get information about a specific domain
   *
   * @param {string} domainName
   * @returns {Promise<Domain>}
   * @memberof DomainService
   */
  public getExistingDomain(domainName: string): Promise<Domain> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/domains/${domainName}`).then((response) => {
        // Return actual domain instead of wrapped domain
        resolve(response.data.domain);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Delete a specific domain from your account
   *
   * @param {string} domainName
   * @returns {Promise<void>}
   * @memberof DomainService
   */
  public deleteDomain(domainName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${this.baseUrl}/domains/${domainName}`).then((response) => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
}
