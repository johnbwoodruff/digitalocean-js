import { instance } from '../../axios-instance';
import MockAdapter from 'axios-mock-adapter';

import { DigitalOcean } from '../../digitalocean';
import { AxiosError } from 'axios';
import { Action } from '../../models/action';

const DUMMY_ACTIONS: Action[] = [{ id: 1 } as Action];
const MOCK_ERROR = { message: 'Some error' };

const mock = new MockAdapter(instance, { onNoMatch: 'throwException' });
const client = new DigitalOcean('abc123');

describe('Actions Service', () => {
  it('should exist', () => {
    expect(client.account).toBeDefined();
  });

  describe('getAllActions', () => {
    it('should resolve correctly', async () => {
      mock
        .onGet('/actions', { params: { page: 1, per_page: 25 } })
        .reply(200, { actions: DUMMY_ACTIONS });

      const actions = await client.actions.getAllActions();
      expect(actions.length).toEqual(1);
    });

    it('should resolve correctly with passed pagination', async () => {
      mock
        .onGet('/actions', { params: { page: 2, per_page: 50 } })
        .reply(200, { actions: DUMMY_ACTIONS });

      const actions = await client.actions.getAllActions(50, 2);
      expect(actions.length).toEqual(1);
    });

    it('should reject on failure', async () => {
      mock.onGet('/actions').reply(400, MOCK_ERROR);

      try {
        await client.actions.getAllActions();
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(MOCK_ERROR);
      }
    });
  });
});
