import { axios } from '../axios-instance';

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
      axios
        .get(`/account`)
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
