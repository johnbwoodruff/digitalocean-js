import { axios } from '../axios-instance';

import { SshKey } from '../models/ssh-key';

export class SshService {
  constructor() {}

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
    return new Promise((resolve, reject) => {
      axios
        .get(`/account/keys`)
        .then(response => {
          // Return actual ssh keys instead of wrapped ssh keys
          resolve(response.data.ssh_keys);
        })
        .catch(error => {
          reject(error);
        });
    });
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
    return new Promise((resolve, reject) => {
      axios
        .post(`/account/keys`, key)
        .then(response => {
          // Return actual ssh key instead of wrapped ssh key
          resolve(response.data.ssh_key);
        })
        .catch(error => {
          reject(error);
        });
    });
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
    return new Promise((resolve, reject) => {
      axios
        .get(`/account/keys/${idOrFingerprint}`)
        .then(response => {
          // Return actual ssh key instead of wrapped ssh key
          resolve(response.data.ssh_key);
        })
        .catch(error => {
          reject(error);
        });
    });
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
    return new Promise((resolve, reject) => {
      axios
        .put(`/account/keys/${idOrFingerprint}`, key)
        .then(response => {
          // Return actual ssh key instead of wrapped ssh key
          resolve(response.data.ssh_key);
        })
        .catch(error => {
          reject(error);
        });
    });
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
    return new Promise((resolve, reject) => {
      axios
        .delete(`/account/keys/${idOrFingerprint}`)
        .then(() => {
          // Return actual ssh key instead of wrapped ssh key
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
