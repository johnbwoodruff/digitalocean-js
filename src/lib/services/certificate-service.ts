import { axios } from '../axios-instance';

import { Certificate, CertificateRequest } from '../models/certificate';

export class CertificateService {
  constructor() {}

  /**
   * Upload a new SSL Certificate
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   name: 'web-cert-01',
   *   private_key: '-----BEGIN PRIVATE KEY-----...',
   *   leaf_certificate: '-----BEGIN CERTIFICATE-----...',
   *   certificate_chain: '-----BEGIN CERTIFICATE-----...'
   * };
   * const cert = await client.certificates.createCertificate(request);
   * ```
   */
  public createCertificate(
    certificateRequest: CertificateRequest
  ): Promise<Certificate> {
    return new Promise((resolve, reject) => {
      axios
        .post(`/certificates`, certificateRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const cert = await client.certificates.getExistingCertificate('cert-id');
   * ```
   */
  public getExistingCertificate(certificateId: string): Promise<Certificate> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/certificates/${certificateId}`)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const certs = await client.certificates.getAllCertificates();
   * ```
   */
  public getAllCertificates(): Promise<Certificate[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/certificates`)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.certificates.deleteCertificate('cert-id');
   * ```
   */
  public deleteCertificate(certificateId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/certificates/${certificateId}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
