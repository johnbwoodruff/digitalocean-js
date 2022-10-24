import { AxiosError } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getActions, getErrorResponse, getSingleAction } from '../../../test';
import { instance } from '../../axios-instance';
import { DigitalOcean } from '../../digitalocean';

const mock = new MockAdapter(instance, { onNoMatch: 'throwException' });
const client = new DigitalOcean('abc123');

describe('Actions Service', () => {
  it('should exist', () => {
    expect(client.actions).toBeDefined();
  });

  describe('getAllActions', () => {
    it('should resolve correctly', async () => {
      const actions = getActions();
      mock
        .onGet('/actions', { params: { page: 1, per_page: 25 } })
        .reply(200, { actions });

      const allActions = await client.actions.getAllActions();
      expect(allActions.length).toEqual(2);
    });

    it('should resolve correctly with passed pagination', async () => {
      const actions = getActions();
      mock
        .onGet('/actions', { params: { page: 2, per_page: 50 } })
        .reply(200, { actions });

      const allActions = await client.actions.getAllActions(50, 2);
      expect(allActions.length).toEqual(2);
    });

    it('should reject on failure', async () => {
      const error = getErrorResponse();
      mock.onGet('/actions').reply(400, error);

      try {
        await client.actions.getAllActions();
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(error);
      }
    });
  });

  describe('getExistingAction', () => {
    it('should resolve correctly', async () => {
      const action = getSingleAction();
      mock.onGet(`/actions/${action.id}`).reply(200, { action });

      const singleAction = await client.actions.getExistingAction(action.id);
      expect(singleAction).toEqual(action);
    });

    it('should reject on failure', async () => {
      const action = getSingleAction();
      const error = getErrorResponse();
      mock.onGet(`/actions/${action.id}`).reply(400, error);

      try {
        await client.actions.getExistingAction(action.id);
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(error);
      }
    });
  });
});
