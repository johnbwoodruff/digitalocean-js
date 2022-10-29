import { AxiosError } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {
  getCdnEndpoints,
  getErrorResponse,
  getSingleCdnEndpoint
} from '../../../test';
import { instance } from '../../axios-instance';
import { DigitalOcean } from '../../digitalocean';
import { CdnEndpointRequest } from '../../models';

const mock = new MockAdapter(instance, { onNoMatch: 'throwException' });
const client = new DigitalOcean('abc123');

describe('CDN Service', () => {
  it('should exist', () => {
    expect(client.cdn).toBeDefined();
  });

  describe('getAllEndpoints', () => {
    it('should resolve correctly', async () => {
      const endpoints = getCdnEndpoints();
      mock.onGet('/cdn/endpoints').reply(200, { endpoints });

      const allEndpoints = await client.cdn.getAllEndpoints();
      expect(allEndpoints).toEqual(endpoints);
    });

    it('should reject on failure', async () => {
      const error = getErrorResponse();
      mock.onGet('/cdn/endpoints').reply(400, error);

      try {
        await client.cdn.getAllEndpoints();
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(error);
      }
    });
  });

  describe('getExistingEndpoint', () => {
    it('should resolve correctly', async () => {
      const endpoint = getSingleCdnEndpoint();
      mock.onGet(`/cdn/endpoints/${endpoint.id}`).reply(200, { endpoint });

      const singleEndpoint = await client.cdn.getExistingEndpoint(endpoint.id);
      expect(singleEndpoint).toEqual(endpoint);
    });

    it('should reject on failure', async () => {
      const error = getErrorResponse();
      mock.onGet('/cdn/endpoints/bad-id').reply(400, error);

      try {
        await client.cdn.getExistingEndpoint('bad-id');
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(error);
      }
    });
  });

  describe('createEndpoint', () => {
    it('should resolve correctly', async () => {
      const endpoint = getSingleCdnEndpoint();
      const createRequest: CdnEndpointRequest = {
        origin: endpoint.origin,
        ttl: 3600
      };
      mock.onPost(`/cdn/endpoints`, createRequest).reply(200, { endpoint });

      const singleEndpoint = await client.cdn.createEndpoint(createRequest);
      expect(singleEndpoint).toEqual(endpoint);
    });

    it('should throw an error if request fails validation', async () => {
      const badRequest: CdnEndpointRequest = {
        ttl: 3600
      };

      try {
        await client.cdn.createEndpoint(badRequest);
      } catch (e) {
        expect((e as Error).message).toEqual(
          'Required fields missing from Endpoint Object'
        );
      }
    });

    it('should reject on failure', async () => {
      const error = getErrorResponse();
      const badRequest: CdnEndpointRequest = {
        origin: 'not-an-origin',
        ttl: -3600
      };
      mock.onPost(`/cdn/endpoints`, badRequest).reply(400, error);

      try {
        await client.cdn.createEndpoint(badRequest);
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(error);
      }
    });
  });

  describe('updateEndpoint', () => {
    it('should resolve correctly', async () => {
      const endpoint = { ...getSingleCdnEndpoint(), ttl: 86400 };
      mock
        .onPut(`/cdn/endpoints/${endpoint.id}`, { ttl: 86400 })
        .reply(200, { endpoint });

      const singleEndpoint = await client.cdn.updateEndpoint(
        endpoint.id,
        86400
      );
      expect(singleEndpoint).toEqual(endpoint);
    });

    it('should reject on failure', async () => {
      const error = getErrorResponse();
      mock.onPut(`/cdn/endpoints/bad-id`, { ttl: -3600 }).reply(400, error);

      try {
        await client.cdn.updateEndpoint('bad-id', -3600);
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(error);
      }
    });
  });

  describe('deleteEndpoint', () => {
    it('should resolve correctly', async () => {
      const endpoint = getSingleCdnEndpoint();
      mock.onDelete(`/cdn/endpoints/${endpoint.id}`).reply(200);

      try {
        await client.cdn.deleteEndpoint(endpoint.id);
      } catch (e) {
        fail('delete should have resolved correctly');
      }
    });

    it('should reject on failure', async () => {
      const error = getErrorResponse();
      mock.onDelete(`/cdn/endpoints/bad-id`).reply(400, error);

      try {
        await client.cdn.deleteEndpoint('bad-id');
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(error);
      }
    });
  });

  describe('purgeEndpointCache', () => {
    it('should resolve correctly', async () => {
      const endpoint = getSingleCdnEndpoint();
      const files = ['test-file-1.jpg', 'test-file-2.jpg'];
      mock
        .onDelete(`/cdn/endpoints/${endpoint.id}/cache`, { files })
        .reply(200);

      try {
        await client.cdn.purgeEndpointCache(endpoint.id, files);
      } catch (e) {
        fail('purge cache should have resolved correctly');
      }
    });

    it('should reject on failure', async () => {
      const error = getErrorResponse();
      const files = ['bad-file-1.jpg', 'bad-file-2.jpg'];
      mock.onDelete(`/cdn/endpoints/bad-id/cache`, { files }).reply(400, error);

      try {
        await client.cdn.purgeEndpointCache('bad-id', files);
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(error);
      }
    });
  });
});
