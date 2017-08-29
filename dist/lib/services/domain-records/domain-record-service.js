import Axios from 'axios';
import { DigitalOcean } from '../../digitalocean';
import { Environment } from '../../conf/environment';
export class DomainRecordService extends DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new Environment();
        this.baseUrl = env.baseUrl;
        Axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        Axios.defaults.headers.common['Content-Type'] = `application/json`;
    }
    /**
     * Get all records configured for a domain
     *
     * @param {string} domainName
     * @returns {Promise<DomainRecord[]>}
     * @memberof DomainRecordService
     */
    getAllDomainRecords(domainName) {
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
    createDomainRecord(domainName, domainRequest) {
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
    getExistingDomainRecord(domainName, recordId) {
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
    updateDomainRecord(domainName, recordId, domainRequest) {
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
    deleteDomainRecord(domainName, recordId) {
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
//# sourceMappingURL=domain-record-service.js.map