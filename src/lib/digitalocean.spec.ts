import test from 'ava';
import { DigitalOcean } from './digitalocean';

test('should exist', async t => {
  const client = new DigitalOcean('abc123');
  t.not(client, undefined);
});
