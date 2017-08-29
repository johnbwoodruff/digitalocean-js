import Axios from 'axios';
import { DigitalOcean } from '../../digitalocean';
import { Environment } from '../../conf/environment';
export class AccountService extends DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new Environment();
        this.baseUrl = env.baseUrl;
        Axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        Axios.defaults.headers.common['Content-Type'] = `application/json`;
    }
    /**
     * Get the account information associated with the provided credentials
     *
     * @returns {Promise<Account>}
     * @memberof AccountService
     */
    getUserInformation() {
        return new Promise((resolve, reject) => {
            const url = this.baseUrl;
            Axios.get(`${url}/account`).then((response) => {
                // Return actual account instead of wrapped account
                resolve(response.data.account);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
//# sourceMappingURL=account-service.js.map