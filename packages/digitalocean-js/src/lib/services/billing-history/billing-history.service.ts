import { Balance, BillingHistory } from '../../models';

import { instance } from '../../axios-instance';

export class BillingHistoryService {
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
    return instance
      .get('/customers/my/balance')
      .then(response => response.data);
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
    return instance
      .get('/customers/my/billing_history')
      .then(response => response.data.billing_history);
  }
}
