import { DigitalOcean } from './digitalocean';
import { RESOURCE_TYPE } from './models/project';

describe('DigitalOcean Client', () => {
  it('should exist', () => {
    const client = new DigitalOcean('abc123');
    expect(client).toBeDefined();
  });

  it('parseProjectResourceUrn method - success', () => {
    const client = new DigitalOcean('abc123');
    expect(client.projects.parseProjectResourceUrn('do:droplet:123456')).toEqual({
      id: '123456',
      type: RESOURCE_TYPE.DROPLET
    });
  });

  it('parseProjectResourceUrn method - bad urn', () => {
    const client = new DigitalOcean('abc123');
    expect(() => client.projects.parseProjectResourceUrn('this-is-not-a-urn')).toThrowError(`URN expected in the format of 'do:resource_type:resource_id'`)
  });
});
