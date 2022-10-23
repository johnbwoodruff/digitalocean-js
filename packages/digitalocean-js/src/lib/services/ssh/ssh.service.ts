import { instance } from '../../axios-instance';

import { SshKey } from '../../models/ssh-key';

export class SshService {
  /**
   * Get all ssh keys on account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const keys = await client.ssh.getAllKeys();
   * ```
   */
  public getAllKeys(): Promise<SshKey[]> {
    return instance
      .get(`/account/keys`)
      .then(response => response.data.ssh_keys);
  }

  /**
   * Create new ssh key
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   name: 'My SSH Public Key',
   *   public_key: 'ssh-rsa abcdef.... example'
   * };
   * const key = await client.ssh.createNewKey(request);
   * ```
   */
  public createNewKey(key: SshKey): Promise<SshKey> {
    return instance
      .post(`/account/keys`, key)
      .then(response => response.data.ssh_key);
  }

  /**
   * Get existing ssh key from id
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const key = await client.ssh.getExistingKey('id-or-fingerprint');
   * ```
   */
  public getExistingKey(idOrFingerprint: string): Promise<SshKey> {
    return instance
      .get(`/account/keys/${idOrFingerprint}`)
      .then(response => response.data.ssh_key);
  }

  /**
   * Update ssh key
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   name: 'Renamed SSH Key'
   * };
   * const key = await client.ssh.updateKey('id-or-fingerprint', request);
   * ```
   */
  public updateKey(idOrFingerprint: string, key: SshKey): Promise<SshKey> {
    return instance
      .put(`/account/keys/${idOrFingerprint}`, key)
      .then(response => response.data.ssh_key);
  }

  /**
   * Delete ssh key
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.ssh.deleteKey('id-or-fingerprint');
   * ```
   */
  public deleteKey(idOrFingerprint: string): Promise<void> {
    return instance.delete(`/account/keys/${idOrFingerprint}`);
  }
}
