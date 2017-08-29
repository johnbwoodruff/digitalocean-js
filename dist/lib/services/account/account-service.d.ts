import { DigitalOcean } from '../../digitalocean';
import { Account } from '../../models/account';
export declare class AccountService extends DigitalOcean {
    private baseUrl;
    constructor(accessToken: string);
    /**
     * Get the account information associated with the provided credentials
     *
     * @returns {Promise<Account>}
     * @memberof AccountService
     */
    getUserInformation(): Promise<Account>;
}
