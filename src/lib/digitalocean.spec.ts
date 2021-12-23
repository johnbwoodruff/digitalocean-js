import test from 'ava';
import { RESOURCE_TYPE } from '..';
import { DigitalOcean } from './digitalocean';

test('should exist', async t => {
  const client = new DigitalOcean('abc123');
  t.not(client, undefined);
});

test('parseProjectResourceUrn method - success', async t => {
  const client = new DigitalOcean('abc123');
  t.deepEqual(client.projects.parseProjectResourceUrn('do:droplet:123456'), {
    id: '123456',
    type: RESOURCE_TYPE.DROPLET
  });
});

test('parseProjectResourceUrn method - bad urn', async t => {
  const client = new DigitalOcean('abc123');
  const error = t.throws(
    () => client.projects.parseProjectResourceUrn('this-is-not-a-urn'),
    { instanceOf: Error }
  );
  t.is(
    error.message,
    `URN expected in the format of 'do:resource_type:resource_id'`
  );
});
