import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { Domain, DomainRequest } from '../models/domain';

export class DomainService {
  constructor() {}

  /**
   * Get a list of all the domains on your account
   */
  public getAllDomains(): Promise<Domain[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/domains`)
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
   */
  public createDomain(domainRequest: DomainRequest): Promise<Domain> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/domains`, domainRequest)
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
   */
  public getExistingDomain(domainName: string): Promise<Domain> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/domains/${domainName}`)
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
   */
  public deleteDomain(domainName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${API_BASE_URL}/domains/${domainName}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
