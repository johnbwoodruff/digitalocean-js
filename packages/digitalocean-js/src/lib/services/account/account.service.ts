import { instance } from '../../axios-instance';

import { Account } from '@digitalocean-js/data-access';

export class AccountService {
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
  public async getUserInformation(): Promise<Account> {
    return instance.get('/account').then(response => response.data.account);
  }
}
