import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { Certificate, CertificateRequest } from '../models/certificate';

export class CertificateService {
  constructor() {}

  /**
   * Upload a new SSL Certificate
   */
  public createCertificate(
    certificateRequest: CertificateRequest
  ): Promise<Certificate> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/certificates`, certificateRequest)
        .then(response => {
          // Return actual certificate instead of wrapped certificate
          resolve(response.data.certificate);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get information about an existing SSL Certificate
   */
  public getExistingCertificate(certificateId: string): Promise<Certificate> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/certificates/${certificateId}`)
        .then(response => {
          // Return actual certificate instead of wrapped certificate
          resolve(response.data.certificate);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get information about all SSL Certificates on your account
   */
  public getAllCertificates(): Promise<Certificate[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/certificates`)
        .then(response => {
          // Return actual certificates instead of wrapped certificates
          resolve(response.data.certificates);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete a specific SSL Certificate from the provided ID
   */
  public deleteCertificate(certificateId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${API_BASE_URL}/certificates/${certificateId}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
