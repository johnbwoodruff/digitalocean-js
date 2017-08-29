"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const digitalocean_1 = require("../../digitalocean");
const environment_1 = require("../../conf/environment");
class DomainRecordService extends digitalocean_1.DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new environment_1.Environment();
        this.baseUrl = env.baseUrl;
        axios_1.default.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        axios_1.default.defaults.headers.common['Content-Type'] = `application/json`;
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
            axios_1.default.get(`${this.baseUrl}/domains/${domainName}/records`).then((response) => {
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
            axios_1.default.post(`${this.baseUrl}/domains/${domainName}/records`, domainRequest).then((response) => {
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
            axios_1.default.get(`${this.baseUrl}/domains/${domainName}/records/${recordId}`).then((response) => {
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
            axios_1.default.put(`${this.baseUrl}/domains/${domainName}/records/${recordId}`, domainRequest).then((response) => {
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
            axios_1.default.delete(`${this.baseUrl}/domains/${domainName}/records/${recordId}`).then((response) => {
                // Return actual domain_record instead of wrapped domain_record
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
exports.DomainRecordService = DomainRecordService;
//# sourceMappingURL=domain-record-service.js.map