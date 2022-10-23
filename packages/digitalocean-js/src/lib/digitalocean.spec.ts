import { DigitalOcean } from './digitalocean';

describe('DigitalOcean Client', () => {
  let client: DigitalOcean;

  beforeEach(() => {
    client = new DigitalOcean('abc123');
  });

  it('should exist', () => {
    expect(client).toBeDefined();
  });
});
