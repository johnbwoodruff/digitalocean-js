import { axios } from '../axios-instance';

import { Snapshot } from '../models/snapshot';

export type SnapshotType = 'all' | 'droplet' | 'volume';

export class SnapshotService {
  constructor() {}

  /**
   * Get all snapshots on the account.
   * Optionally provide a resource type to filter snapshots.
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * // Get all snapshots
   * const snapshots = await client.snapshots.getSnapshots();
   * // Get all droplet snapshots
   * snapshots = await client.snapshots.getSnapshots('droplet');
   * // Get all volume snapshots
   * snapshots = await client.snapshots.getSnapshots('volume');
   * ```
   */
  public getSnapshots(resourceType?: SnapshotType): Promise<Snapshot[]> {
    return new Promise((resolve, reject) => {
      let url = `/snapshots`;
      if (resourceType && resourceType !== 'all') {
        url += `?resource_type=${resourceType}`;
      }
      axios
        .get(url)
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
   * Get a specific existing snapshot by ID
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const snapshot = await client.snapshots.getSnapshotById('snapshot-id');
   * ```
   */
  public getSnapshotById(snapshotId: string): Promise<Snapshot> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/snapshots/${snapshotId}`)
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
   * Delete a specific snapshot by ID
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.snapshots.deleteSnapshot('snapshot-id');
   * ```
   */
  public deleteSnapshot(snapshotId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/snapshots/${snapshotId}`)
        .then(() => {
          // Return actual snapshot instead of wrapped snapshot
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
