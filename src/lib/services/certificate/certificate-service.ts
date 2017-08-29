import Axios from 'axios';

import { DigitalOcean } from '../../digitalocean';
import { Environment } from '../../conf/environment';
import { Certificate, CertificateRequest } from '../../models/certificate';

export class CertificateService extends DigitalOcean {
  private baseUrl: string;

  constructor(accessToken: string) {
    super(accessToken);
    const env = new Environment();
    this.baseUrl = env.baseUrl;
    Axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
    Axios.defaults.headers.common['Content-Type'] = `application/json`;
  }

  /**
   * Upload a new SSL Certificate
   *
   * @param {CertificateRequest} certificateRequest
   * @returns {Promise<Certificate>}
   * @memberof CertificateService
   */
  public createCertificate(certificateRequest: CertificateRequest): Promise<Certificate> {
    return new Promise((resolve, reject) => {
      Axios.post(`${this.baseUrl}/certificates`, certificateRequest).then((response) => {
        // Return actual certificate instead of wrapped certificate
        resolve(response.data.certificate);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Get information about an existing SSL Certificate
   *
   * @param {string} certificateId
   * @returns {Promise<Certificate>}
   * @memberof CertificateService
   */
  public getExistingCertificate(certificateId: string): Promise<Certificate> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/certificates/${certificateId}`).then((response) => {
        // Return actual certificate instead of wrapped certificate
        resolve(response.data.certificate);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Get information about all SSL Certificates on your account
   *
   * @returns {Promise<Certificate[]>}
   * @memberof CertificateService
   */
  public getAllCertificates(): Promise<Certificate[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/certificates`).then((response) => {
        // Return actual certificates instead of wrapped certificates
        resolve(response.data.certificates);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Delete a specific SSL Certificate from the provided ID
   *
   * @param {string} certificateId
   * @returns {Promise<void>}
   * @memberof CertificateService
   */
  public deleteCertificate(certificateId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${this.baseUrl}/certificates`).then((response) => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
}
