import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { BlockStorage, BlockStorageRequest } from '../models/block-storage';
import { Snapshot } from '../models/snapshot';

export class BlockStorageService {
  constructor() {}

  /**
   * List all of the Block Storage volumes available on your account
   */
  public getAllBlockStorage(): Promise<BlockStorage[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/volumes`)
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
   */
  public createBlockStorage(
    volume: BlockStorageRequest
  ): Promise<BlockStorage> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/volumes`, volume)
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
   */
  public getBlockStorageById(id: string): Promise<BlockStorage> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/volumes/${id}`)
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
   */
  public getBlockStorageByName(
    name: string,
    regionSlug: string
  ): Promise<BlockStorage[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/volumes?name=${name}&region=${regionSlug}`)
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
   */
  public getSnapshotsForVolume(id: string): Promise<Snapshot[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/volumes/${id}/snapshots`)
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
   */
  public createSnapshotFromVolume(id: string, name: string): Promise<Snapshot> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/volumes/${id}/snapshots`, { name })
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
   */
  public deleteBlockStorageById(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${API_BASE_URL}/volumes/${id}`)
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
   */
  public deleteBlockStorageByName(
    name: string,
    regionSlug: string
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${API_BASE_URL}/volumes?name=${name}&region=${regionSlug}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
