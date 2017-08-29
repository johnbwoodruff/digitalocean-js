import Axios from 'axios';

import { DigitalOcean } from '../../digitalocean';
import { Environment } from '../../conf/environment';
import { Account } from '../../models/account';

export class AccountService extends DigitalOcean {
  private baseUrl: string;

  constructor(accessToken: string) {
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
  public getUserInformation(): Promise<Account> {
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
