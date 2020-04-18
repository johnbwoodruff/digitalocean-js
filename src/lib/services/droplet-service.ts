import { axios } from '../axios-instance';

import { Action } from '../models/action';
import { Backup } from '../models/backup';
import { Droplet, DropletRequest } from '../models/droplet';
import { Kernel } from '../models/kernel';
import { Snapshot } from '../models/snapshot';

export class DropletService {
  constructor() {}

  /**
   * Create a new droplet
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   name: 'example.com',
   *   region: 'nyc3',
   *   size: 's-1vcpu-1gb',
   *   image: 'ubuntu-16-04-x64',
   *   ssh_keys: null,
   *   backups: false,
   *   ipv6: true,
   *   user_data: null,
   *   private_networking: null,
   *   volumes: null,
   *   tags: [
   *     'web'
   *   ]
   * };
   * const droplet = await client.droplets.createNewDroplet(request);
   * ```
   */
  public createNewDroplet(dropletRequest: DropletRequest): Promise<Droplet> {
    return new Promise((resolve, reject) => {
      axios
        .post(`/droplets`, dropletRequest)
        .then(response => {
          // Return actual droplet instead of wrapped droplet
          resolve(response.data.droplet);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Create multiple droplets with the same specs but different names
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   names: [
   *     'sub-01.example.com',
   *     'sub-02.example.com'
   *   ],
   *   region: 'nyc3',
   *   size: 's-1vcpu-1gb',
   *   image: 'ubuntu-16-04-x64',
   *   ssh_keys: null,
   *   backups: false,
   *   ipv6: true,
   *   user_data: null,
   *   private_networking: null,
   *   tags: [
   *     'web'
   *   ]
   * };
   * const droplets = await client.droplets.createMultipleDroplets(request);
   * ```
   */
  public createMultipleDroplets(
    dropletsRequest: DropletRequest
  ): Promise<Droplet[]> {
    return new Promise((resolve, reject) => {
      axios
        .post(`/droplets`, dropletsRequest)
        .then(response => {
          // Return actual droplets instead of wrapped droplets
          resolve(response.data.droplets);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get a specific existing droplet by ID
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const droplet = await client.droplets.getExistingDroplet('droplet-id');
   * ```
   */
  public getExistingDroplet(dropletId: number): Promise<Droplet> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/droplets/${dropletId}`)
        .then(response => {
          // Return actual droplet instead of wrapped droplet
          resolve(response.data.droplet);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get all droplets on the account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const droplets = await client.droplets.getAllDroplets();
   * ```
   */
  public getAllDroplets(): Promise<Droplet[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/droplets`)
        .then(response => {
          // Return actual droplets instead of wrapped droplets
          resolve(response.data.droplets);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get all droplets on the account that has a given tag
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const droplets = await client.droplets.getDropletsByTag('tag-name');
   * ```
   */
  public getDropletsByTag(tag: string): Promise<Droplet[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/droplets?tag_name=${tag}`)
        .then(response => {
          // Return actual droplets instead of wrapped droplets
          resolve(response.data.droplets);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Retrieve a list of all kernels available to a Droplet
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const kernels = await client.droplets.getAvailableKernelsForDroplet('droplet-id');
   * ```
   */
  public getAvailableKernelsForDroplet(dropletId: number): Promise<Kernel[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/droplets/${dropletId}/kernels`)
        .then(response => {
          // Return actual kernels instead of wrapped kernels
          resolve(response.data.kernels);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Retrieve the snapshots that have been created from a Droplet
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const snapshots = await client.droplets.getSnapshotsForDroplet('droplet-id');
   * ```
   */
  public getSnapshotsForDroplet(dropletId: number): Promise<Snapshot[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/droplets/${dropletId}/snapshots`)
        .then(response => {
          // Return actual snapshots instead of wrapped snapshots
          resolve(response.data.snapshots);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Retrieve any backups associated with a Droplet
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const backups = await client.droplets.getBackupsForDroplet('droplet-id');
   * ```
   */
  public getBackupsForDroplet(dropletId: number): Promise<Backup[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/droplets/${dropletId}/backups`)
        .then(response => {
          // Return actual backups instead of wrapped backups
          resolve(response.data.backups);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Retrieve all actions that have been executed on a Droplet
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const actions = await client.droplets.getDropletActions('droplet-id');
   * ```
   */
  public getDropletActions(dropletId: number): Promise<Action[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/droplets/${dropletId}/actions`)
        .then(response => {
          // Return actual actions instead of wrapped actions
          resolve(response.data.actions);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete a specific droplet by ID
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.droplets.deleteDroplet('droplet-id');
   * ```
   */
  public deleteDroplet(dropletId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/droplets/${dropletId}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete Droplets by a tag
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.droplets.deleteDropletsByTag('tag');
   * ```
   */
  public deleteDropletsByTag(tag: string): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/droplets?tag_name=${tag}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Retrieve a list of Droplets that are running on the same physical server
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const droplets = await client.droplets.getNeighborsForDroplet('droplet-id');
   * ```
   */
  public getNeighborsForDroplet(dropletId: number): Promise<Droplet[]> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/droplets/${dropletId}/neighbors`)
        .then(response => {
          // Return actual droplets instead of wrapped droplets
          resolve(response.data.droplets);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Retrieve a list of any Droplets that are running on the same physical hardware
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const droplets = await client.droplets.getDropletNeighbors();
   * ```
   */
  public getDropletNeighbors(): Promise<Droplet[][]> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/reports/droplet_neighbors`)
        .then(response => {
          // Return actual neighbors instead of wrapped neighbors
          resolve(response.data.neighbors);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
