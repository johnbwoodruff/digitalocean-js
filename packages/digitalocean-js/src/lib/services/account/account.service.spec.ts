import { AxiosError } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getErrorResponse, getSingleAccount } from '../../../test';
import { instance } from '../../axios-instance';
import { DigitalOcean } from '../../digitalocean';

const mock = new MockAdapter(instance, { onNoMatch: 'throwException' });
const client = new DigitalOcean('abc123');

describe('Account Service', () => {
  it('should exist', () => {
    expect(client.account).toBeDefined();
  });

  describe('getUserInformation', () => {
    it('should resolve correctly', async () => {
      const account = getSingleAccount();
      mock.onGet('/account').reply(200, { account });

      const user = await client.account.getUserInformation();
      expect(user).toEqual(account);
    });

    it('should reject on failure', async () => {
      const error = getErrorResponse();
      mock.onGet('/account').reply(400, error);

      try {
        await client.account.getUserInformation();
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(error);
      }
    });
  });
});
