import { instance } from '../../axios-instance';

import { BlockStorage, BlockStorageRequest } from '../../models/block-storage';
import { Snapshot } from '../../models/snapshot';

export class BlockStorageService {
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
    return instance.get(`/volumes`).then(response => response.data.volumes);
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
    if (!this.volumeIsValid(volume)) {
      throw new Error('Required fields missing from Block Storage Object');
    }
    return instance
      .post(`/volumes`, volume)
      .then(response => response.data.volume);
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
    return instance
      .get(`/volumes/${id}`)
      .then(response => response.data.volume);
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
    return instance
      .get(`/volumes`, { params: { name, region: regionSlug } })
      .then(response => response.data.volumes);
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
    return instance
      .get(`/volumes/${id}/snapshots`)
      .then(response => response.data.snapshots);
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
    return instance
      .post(`/volumes/${id}/snapshots`, { name })
      .then(response => response.data.snapshot);
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
    return instance.delete(`/volumes/${id}`);
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
    return instance.delete(`/volumes`, {
      params: { name, region: regionSlug }
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
