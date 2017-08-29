import { DigitalOcean } from '../../digitalocean';
import { Certificate, CertificateRequest } from '../../models/certificate';
export declare class CertificateService extends DigitalOcean {
    private baseUrl;
    constructor(accessToken: string);
    /**
     * Upload a new SSL Certificate
     *
     * @param {CertificateRequest} certificateRequest
     * @returns {Promise<Certificate>}
     * @memberof CertificateService
     */
    createCertificate(certificateRequest: CertificateRequest): Promise<Certificate>;
    /**
     * Get information about an existing SSL Certificate
     *
     * @param {string} certificateId
     * @returns {Promise<Certificate>}
     * @memberof CertificateService
     */
    getExistingCertificate(certificateId: string): Promise<Certificate>;
    /**
     * Get information about all SSL Certificates on your account
     *
     * @returns {Promise<Certificate[]>}
     * @memberof CertificateService
     */
    getAllCertificates(): Promise<Certificate[]>;
    /**
     * Delete a specific SSL Certificate from the provided ID
     *
     * @param {string} certificateId
     * @returns {Promise<void>}
     * @memberof CertificateService
     */
    deleteCertificate(certificateId: string): Promise<void>;
}
