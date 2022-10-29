import { AxiosError } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getBalance, getBillingHistory, getErrorResponse } from '../../../test';
import { instance } from '../../axios-instance';
import { DigitalOcean } from '../../digitalocean';

const mock = new MockAdapter(instance, { onNoMatch: 'throwException' });
const client = new DigitalOcean('abc123');

describe('Billing History Service', () => {
  it('should exist', () => {
    expect(client.billingHistory).toBeDefined();
  });

  describe('getMyBalance', () => {
    it('should resolve correctly', async () => {
      const balance = getBalance();
      mock.onGet('/customers/my/balance').reply(200, balance);

      const myBalance = await client.billingHistory.getMyBalance();
      expect(myBalance).toEqual(balance);
    });

    it('should reject on failure', async () => {
      const error = getErrorResponse();
      mock.onGet('/customers/my/balance').reply(400, error);

      try {
        await client.billingHistory.getMyBalance();
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(error);
      }
    });
  });

  describe('getMyBillingHistory', () => {
    it('should resolve correctly', async () => {
      const billingHistory = getBillingHistory();
      mock
        .onGet('/customers/my/billing_history')
        .reply(200, { billing_history: billingHistory });

      const myBillingHistory =
        await client.billingHistory.getMyBillingHistory();
      expect(myBillingHistory).toEqual(billingHistory);
    });

    it('should reject on failure', async () => {
      const error = getErrorResponse();
      mock.onGet('/customers/my/billing_history').reply(400, error);

      try {
        await client.billingHistory.getMyBillingHistory();
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(error);
      }
    });
  });
});
