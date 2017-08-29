import { Account } from '../models/account';
export declare class AccountService {
    private key;
    private env;
    constructor();
    /**
     * Get the account information associated with the provided credentials
     *
     * @returns {Promise<Account>}
     * @memberof AccountService
     */
    getUserInformation(): Promise<Account>;
}
