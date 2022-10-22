import { DigitalOcean } from './digitalocean';
import { RESOURCE_TYPE } from './models/project';

describe('DigitalOcean Client', () => {
  let client: DigitalOcean;

  beforeEach(() => {
    client = new DigitalOcean('abc123');
  });

  it('should exist', () => {
    expect(client).toBeDefined();
  });

  it('parseProjectResourceUrn method - success', () => {
    expect(
      client.projects.parseProjectResourceUrn('do:droplet:123456')
    ).toEqual({
      id: '123456',
      type: RESOURCE_TYPE.DROPLET
    });
  });

  it('parseProjectResourceUrn method - bad urn', () => {
    expect(() =>
      client.projects.parseProjectResourceUrn('this-is-not-a-urn')
    ).toThrowError(
      `URN expected in the format of 'do:resource_type:resource_id'`
    );
  });
});
