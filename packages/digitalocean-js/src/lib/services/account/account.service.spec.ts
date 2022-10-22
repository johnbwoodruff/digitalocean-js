import MockAdapter from 'axios-mock-adapter';
import { axios } from '../../axios-instance';

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

describe('Account Service', () => {
  let mock: MockAdapter;
  let client: DigitalOcean;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    client = new DigitalOcean('abc123');
  });

  it('should exist', () => {
    expect(client.account).toBeDefined();
  });

  describe('getUserInformation', () => {
    it('should resolve correctly', async () => {
      mock.onGet('/account').reply(200, DUMMY_ACCOUNT);

      const user = await client.account.getUserInformation();
      expect(user).toEqual(DUMMY_ACCOUNT);
    });
  });
});
