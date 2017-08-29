import { DigitalOcean } from '../../digitalocean';
import { DomainRecord, DomainRecordRequest } from '../../models/domain-record';
export declare class DomainRecordService extends DigitalOcean {
    private baseUrl;
    constructor(accessToken: string);
    /**
     * Get all records configured for a domain
     *
     * @param {string} domainName
     * @returns {Promise<DomainRecord[]>}
     * @memberof DomainRecordService
     */
    getAllDomainRecords(domainName: string): Promise<DomainRecord[]>;
    /**
     * Create a new record for a domain
     *
     * @param {string} domainName
     * @param {DomainRecordRequest} domainRequest
     * @returns {Promise<DomainRecord>}
     * @memberof DomainRecordService
     */
    createDomainRecord(domainName: string, domainRequest: DomainRecordRequest): Promise<DomainRecord>;
    /**
     * Get a specific existing domain record
     *
     * @param {string} domainName
     * @param {number} recordId
     * @returns {Promise<DomainRecord>}
     * @memberof DomainRecordService
     */
    getExistingDomainRecord(domainName: string, recordId: number): Promise<DomainRecord>;
    /**
     * Update an existing domain record
     *
     * @param {string} domainName
     * @param {number} recordId
     * @param {DomainRecordRequest} domainRequest
     * @returns {Promise<DomainRecord>}
     * @memberof DomainRecordService
     */
    updateDomainRecord(domainName: string, recordId: number, domainRequest: DomainRecordRequest): Promise<DomainRecord>;
    /**
     * Delete a record for a domain
     *
     * @param {string} domainName
     * @param {number} recordId
     * @returns {Promise<void>}
     * @memberof DomainRecordService
     */
    deleteDomainRecord(domainName: string, recordId: number): Promise<void>;
}
