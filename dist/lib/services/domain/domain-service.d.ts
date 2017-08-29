import { DigitalOcean } from '../../digitalocean';
import { Domain, DomainRequest } from '../../models/domain';
export declare class DomainService extends DigitalOcean {
    private baseUrl;
    constructor(accessToken: string);
    /**
     * Get a list of all the domains on your account
     *
     * @returns {Promise<Domain[]>}
     * @memberof DomainService
     */
    getAllDomains(): Promise<Domain[]>;
    /**
     * Create a new domain on your account
     *
     * @param {DomainRequest} domainRequest
     * @returns {Promise<Domain>}
     * @memberof DomainService
     */
    createDomain(domainRequest: DomainRequest): Promise<Domain>;
    /**
     * Get information about a specific domain
     *
     * @param {string} domainName
     * @returns {Promise<Domain>}
     * @memberof DomainService
     */
    getExistingDomain(domainName: string): Promise<Domain>;
    /**
     * Delete a specific domain from your account
     *
     * @param {string} domainName
     * @returns {Promise<void>}
     * @memberof DomainService
     */
    deleteDomain(domainName: string): Promise<void>;
}
