import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { SshKey } from '../models/ssh-key';

export class SshService {
  constructor() {}

  /**
   * Get all ssh keys on account
   */
  public getAllKeys(): Promise<SshKey[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/account/keys`)
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
   */
  public createNewKey(key: SshKey): Promise<SshKey> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/account/keys`, key)
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
   */
  public getExistingKey(idOrFingerprint: string): Promise<SshKey> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/account/keys/${idOrFingerprint}`)
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
   */
  public updateKey(idOrFingerprint: string, key: SshKey): Promise<SshKey> {
    return new Promise((resolve, reject) => {
      Axios.put(`${API_BASE_URL}/account/keys/${idOrFingerprint}`, key)
        .then(response => {
          // Return actual ssh key instead of wrapped ssh key
          resolve(response.data.ssh_key);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // TODO: Delete Key
}
