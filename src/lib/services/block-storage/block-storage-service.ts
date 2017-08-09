import Axios from 'axios';

// TODO: Remove ApiKey when OAuth is implemented
import { ApiKey } from '../../conf/api-key';
import { Environment } from '../../conf/environment';
import { BlockStorage, BlockStorageRequest } from '../../models/block-storage';
import { Snapshot } from '../../models/snapshot';

export class BlockStorageService {
  private key: string;
  private baseUrl: string;

  constructor() {
    const env = new Environment();
    this.baseUrl = env.baseUrl;
    this.key = ApiKey;
    Axios.defaults.headers.common['Authorization'] = `Bearer ${this.key}`;
    Axios.defaults.headers.common['Content-Type'] = `application/json`;
  }

  /**
   * List all of the Block Storage volumes available on your account
   *
   * @returns {Promise<BlockStorage[]>}
   * @memberof BlockStorageService
   */
  public getAllBlockStorage(): Promise<BlockStorage[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/volumes`).then((response) => {
        // Return actual volumes instead of wrapped volumes
        resolve(response.data.volumes);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Create a new Block Storage volume
   *
   * @param {BlockStorageRequest} volume
   * @returns {Promise<BlockStorage>}
   * @memberof BlockStorageService
   */
  public createBlockStorage(volume: BlockStorageRequest): Promise<BlockStorage> {
    return new Promise((resolve, reject) => {
      Axios.post(`${this.baseUrl}/volumes`, volume).then((response) => {
        // Return actual volume instead of wrapped volume
        resolve(response.data.volume);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Get a single Block Storage volume by ID
   *
   * @param {string} id
   * @returns {Promise<BlockStorage>}
   * @memberof BlockStorageService
   */
  public getBlockStorageById(id: string): Promise<BlockStorage> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/volumes/${id}`).then((response) => {
        // Return actual volume instead of wrapped volume
        resolve(response.data.volume);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Get Block Storage volumes by name and region
   *
   * @param {string} name
   * @param {string} regionSlug
   * @returns {Promise<BlockStorage[]>}
   * @memberof BlockStorageService
   */
  public getBlockStorageByName(name: string, regionSlug: string): Promise<BlockStorage[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/volumes?name=${name}&region=${regionSlug}`).then((response) => {
        // Return actual volumes instead of wrapped volumes
        resolve(response.data.volumes);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Get snapshots that have been created from a Block Storage volume
   *
   * @param {string} id
   * @returns {Promise<Snapshot[]>}
   * @memberof BlockStorageService
   */
  public getSnapshotsForVolume(id: string): Promise<Snapshot[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/volumes/${id}/snapshots`).then((response) => {
        // Return actual snapshots instead of wrapped snapshots
        resolve(response.data.snapshots);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Create a snapshot from a Block Storage volume
   *
   * @param {string} id
   * @param {string} name
   * @returns {Promise<Snapshot>}
   * @memberof BlockStorageService
   */
  public createSnapshotFromVolume(id: string, name: string): Promise<Snapshot> {
    return new Promise((resolve, reject) => {
      Axios.post(`${this.baseUrl}/volumes/${id}/snapshots`, {name: name}).then((response) => {
        // Return actual snapshot instead of wrapped snapshot
        resolve(response.data.snapshot);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Delete a Block Storage volume by ID
   *
   * @param {string} id
   * @returns {Promise<void>}
   * @memberof BlockStorageService
   */
  public deleteBlockStorageById(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${this.baseUrl}/volumes/${id}`).then((response) => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Delete a Block Storage volume by name and region
   *
   * @param {string} name
   * @param {string} regionSlug
   * @returns {Promise<void>}
   * @memberof BlockStorageService
   */
  public deleteBlockStorageByName(name: string, regionSlug: string): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${this.baseUrl}/volumes?name=${name}&region=${regionSlug}`).then((response) => {
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
}