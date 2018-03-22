import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { Snapshot } from '../models/snapshot';

export type SnapshotType = 'all' | 'droplet' | 'volume';

export class SnapshotService {
  constructor() {}

  /**
   * Get all snapshots on the account.
   * Optionally provide a resource type to filter snapshots.
   */
  public getSnapshots(resourceType?: SnapshotType): Promise<Snapshot[]> {
    return new Promise((resolve, reject) => {
      let url = `${API_BASE_URL}/snapshots`;
      if (resourceType && resourceType !== 'all') {
        url += `?resource_type=${resourceType}`;
      }
      Axios.get(url)
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
   */
  public getSnapshotById(snapshotId: string): Promise<Snapshot> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/snapshots/${snapshotId}`)
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
   */
  public deleteSnapshot(snapshotId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${API_BASE_URL}/snapshots/${snapshotId}`)
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
