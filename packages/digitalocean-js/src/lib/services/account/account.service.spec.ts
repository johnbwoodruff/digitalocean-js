import { AxiosError } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { MOCK_ERROR } from '../../../test/shared';
import { instance } from '../../axios-instance';
import { DigitalOcean } from '../../digitalocean';
import { Account } from '../../models/account';

const DUMMY_ACCOUNT: Account = {
  droplet_limit: 1,
  floating_ip_limit: 1,
  email: 'testy@mctesterson.com',
  uuid: 'abc-123',
  email_verified: true,
  status: 'some-status',
  status_message: 'some-status message'
};

const mock = new MockAdapter(instance, { onNoMatch: 'throwException' });
const client = new DigitalOcean('abc123');

describe('Account Service', () => {
  it('should exist', () => {
    expect(client.account).toBeDefined();
  });

  describe('getUserInformation', () => {
    it('should resolve correctly', async () => {
      mock.onGet('/account').reply(200, { account: DUMMY_ACCOUNT });

      const user = await client.account.getUserInformation();
      expect(user).toEqual(DUMMY_ACCOUNT);
    });

    it('should reject on failure', async () => {
      mock.onGet('/account').reply(400, MOCK_ERROR);

      try {
        await client.account.getUserInformation();
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(MOCK_ERROR);
      }
    });
  });
});
