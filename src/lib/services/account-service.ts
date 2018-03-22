import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { Account } from '../models/account';

export class AccountService {
  constructor() {}

  /**
   * Get the account information associated with the provided credentials
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const account = await client.account.getUserInformation();
   * ```
   */
  public getUserInformation(): Promise<Account> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/account`)
        .then(response => {
          // Return actual account instead of wrapped account
          resolve(response.data.account);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
