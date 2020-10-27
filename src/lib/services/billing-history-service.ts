import { axios } from '../axios-instance';
import { Balance } from '../models/balance';
import { BillingHistory } from '../models/billing-history';

export class BillingHistoryService {
  constructor() {}

  /**
   * Retrieve the balances on a customer's account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const balance = await client.billingHistory.getMyBalance();
   * ```
   */
  public getMyBalance(): Promise<Balance> {
    return new Promise((resolve, reject) => {
      axios
        .get('/customers/my/balance')
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Retrieve a list of all billing history entries
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const billingHistory = await client.billingHistory.getMyBillingHistory();
   * ```
   */
  public getMyBillingHistory(): Promise<BillingHistory[]> {
    return new Promise((resolve, reject) => {
      axios
        .get('/customers/my/billing_history')
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.billing_history);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
