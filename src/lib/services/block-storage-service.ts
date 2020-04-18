import { axios } from '../axios-instance';

import { BlockStorage, BlockStorageRequest } from '../models/block-storage';
import { Snapshot } from '../models/snapshot';

export class BlockStorageService {
  constructor() {}

  /**
   * List all of the Block Storage volumes available on your account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const volumes = await client.blockStorage.getAllBlockStorage();
   * ```
   */
  public getAllBlockStorage(): Promise<BlockStorage[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/volumes`)
        .then(response => {
          // Return actual volumes instead of wrapped volumes
          resolve(response.data.volumes);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Create a new Block Storage volume
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   size_gigabytes: 10,
   *   name: 'example',
   *   description: 'Block store for examples',
   *   region: 'nyc1'
   * };
   * const volume = await client.blockStorage.createBlockStorage(request);
   * ```
   */
  public createBlockStorage(
    volume: BlockStorageRequest
  ): Promise<BlockStorage> {
    return new Promise((resolve, reject) => {
      if (!this.volumeIsValid(volume)) {
        throw new Error('Required fields missing from Block Storage Object');
      }
      axios
        .post(`/volumes`, volume)
        .then(response => {
          // Return actual volume instead of wrapped volume
          resolve(response.data.volume);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get a single Block Storage volume by ID
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const volume = await client.blockStorage.getBlockStorageById('volume-id');
   * ```
   */
  public getBlockStorageById(id: string): Promise<BlockStorage> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/volumes/${id}`)
        .then(response => {
          // Return actual volume instead of wrapped volume
          resolve(response.data.volume);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get Block Storage volumes by name and region
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const volume = await client.blockStorage
   *    .getBlockStorageByName('volume-name', 'nyc1');
   * ```
   */
  public getBlockStorageByName(
    name: string,
    regionSlug: string
  ): Promise<BlockStorage[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/volumes?name=${name}&region=${regionSlug}`)
        .then(response => {
          // Return actual volumes instead of wrapped volumes
          resolve(response.data.volumes);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get snapshots that have been created from a Block Storage volume
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const snapshots = await client.blockStorage
   *    .getSnapshotsForVolume('volume-id');
   * ```
   */
  public getSnapshotsForVolume(id: string): Promise<Snapshot[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/volumes/${id}/snapshots`)
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
   * Create a snapshot from a Block Storage volume
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const snapshot = await client.blockStorage
   *    .createSnapshotFromVolume('volume-id', 'my-new-snapshot');
   * ```
   */
  public createSnapshotFromVolume(id: string, name: string): Promise<Snapshot> {
    return new Promise((resolve, reject) => {
      axios
        .post(`/volumes/${id}/snapshots`, { name })
        .then(response => {
          // Return actual snapshot instead of wrapped snapshot
          resolve(response.data.snapshot);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete a Block Storage volume by ID
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.blockStorage.deleteBlockStorageById('volume-id');
   * ```
   */
  public deleteBlockStorageById(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/volumes/${id}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete a Block Storage volume by name and region
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.blockStorage.deleteBlockStorageByName('volume-name', 'nyc1');
   * ```
   */
  public deleteBlockStorageByName(
    name: string,
    regionSlug: string
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/volumes?name=${name}&region=${regionSlug}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  ////////// Validation Methods //////////
  private volumeIsValid(vol: BlockStorageRequest): boolean {
    if (!vol.size_gigabytes || !vol.name) {
      return false;
    }
    return true;
  }
}
