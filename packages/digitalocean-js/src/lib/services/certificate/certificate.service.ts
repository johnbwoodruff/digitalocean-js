import { instance } from '../../axios-instance';

import { Certificate, CertificateRequest } from '../../models/certificate';

export class CertificateService {
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
    return instance
      .post(`/certificates`, certificateRequest)
      .then(response => response.data.certificate);
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
    return instance
      .get(`/certificates/${certificateId}`)
      .then(response => response.data.certificate);
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
    return instance
      .get(`/certificates`)
      .then(response => response.data.certificates);
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
    return instance.delete(`/certificates/${certificateId}`);
  }
}
