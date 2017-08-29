"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const digitalocean_1 = require("../../digitalocean");
const environment_1 = require("../../conf/environment");
class CertificateService extends digitalocean_1.DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new environment_1.Environment();
        this.baseUrl = env.baseUrl;
        axios_1.default.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        axios_1.default.defaults.headers.common['Content-Type'] = `application/json`;
    }
    /**
     * Upload a new SSL Certificate
     *
     * @param {CertificateRequest} certificateRequest
     * @returns {Promise<Certificate>}
     * @memberof CertificateService
     */
    createCertificate(certificateRequest) {
        return new Promise((resolve, reject) => {
            axios_1.default.post(`${this.baseUrl}/certificates`, certificateRequest).then((response) => {
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
    getExistingCertificate(certificateId) {
        return new Promise((resolve, reject) => {
            axios_1.default.get(`${this.baseUrl}/certificates/${certificateId}`).then((response) => {
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
    getAllCertificates() {
        return new Promise((resolve, reject) => {
            axios_1.default.get(`${this.baseUrl}/certificates`).then((response) => {
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
    deleteCertificate(certificateId) {
        return new Promise((resolve, reject) => {
            axios_1.default.delete(`${this.baseUrl}/certificates`).then((response) => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
exports.CertificateService = CertificateService;
//# sourceMappingURL=certificate-service.js.map