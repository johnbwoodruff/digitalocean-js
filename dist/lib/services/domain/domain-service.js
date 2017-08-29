import Axios from 'axios';
import { DigitalOcean } from '../../digitalocean';
import { Environment } from '../../conf/environment';
export class DomainService extends DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new Environment();
        this.baseUrl = env.baseUrl;
        Axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        Axios.defaults.headers.common['Content-Type'] = `application/json`;
    }
    /**
     * Get a list of all the domains on your account
     *
     * @returns {Promise<Domain[]>}
     * @memberof DomainService
     */
    getAllDomains() {
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
    createDomain(domainRequest) {
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
    getExistingDomain(domainName) {
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
    deleteDomain(domainName) {
        return new Promise((resolve, reject) => {
            Axios.delete(`${this.baseUrl}/domains/${domainName}`).then((response) => {
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
//# sourceMappingURL=domain-service.js.map