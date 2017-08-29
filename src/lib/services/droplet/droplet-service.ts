import Axios from 'axios';

// TODO: Remove ApiKey when OAuth is implemented
import { ApiKey } from '../../conf/api-key';
import { Environment } from '../../conf/environment';
import { Droplet, DropletRequest } from '../../models/droplet';

export class DropletService {
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
   * Create a new droplet
   *
   * @param {DropletRequest} dropletRequest
   * @returns {Promise<Droplet>}
   * @memberof DropletService
   */
  public createNewDroplet(dropletRequest: DropletRequest): Promise<Droplet> {
    return new Promise((resolve, reject) => {
      Axios.post(`${this.baseUrl}/droplets`, dropletRequest).then((response) => {
        // Return actual droplet instead of wrapped droplet
        resolve(response.data.droplet);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Create multiple droplets with the same specs but different names
   *
   * @param {DropletRequest} dropletsRequest
   * @returns {Promise<Droplet[]>}
   * @memberof DropletService
   */
  public createMultipleDroplets(dropletsRequest: DropletRequest): Promise<Droplet[]> {
    return new Promise((resolve, reject) => {
      Axios.post(`${this.baseUrl}/droplets`, dropletsRequest).then((response) => {
        // Return actual droplets instead of wrapped droplets
        resolve(response.data.droplets);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Get a specific existing droplet by ID
   *
   * @param {number} dropletId
   * @returns {Promise<Droplet>}
   * @memberof DropletService
   */
  public getExistingDroplet(dropletId: number): Promise<Droplet> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/droplets/${dropletId}`).then((response) => {
        // Return actual droplet instead of wrapped droplet
        resolve(response.data.droplet);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Get all droplets on the account
   *
   * @returns {Promise<Droplet[]>}
   * @memberof DropletService
   */
  public getAllDroplets(): Promise<Droplet[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/droplets`).then((response) => {
        // Return actual droplets instead of wrapped droplets
        resolve(response.data.droplets);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Get all droplets on the account that has a given tag
   *
   * @param {string} tag
   * @returns {Promise<Droplet[]>}
   * @memberof DropletService
   */
  public getDropletsByTag(tag: string): Promise<Droplet[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/droplets?tag_name=${tag}`).then((response) => {
        // Return actual droplets instead of wrapped droplets
        resolve(response.data.droplets);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Delete a specific droplet by ID
   *
   * @param {string} dropletId
   * @returns {Promise<void>}
   * @memberof DropletService
   */
  public deleteDroplet(dropletId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${this.baseUrl}/droplets/${dropletId}`).then((response) => {
        // Return actual droplets instead of wrapped droplets
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /* TODO: Implement following methods:
   * List all kernals for droplet
   * List snapshots for droplet
   * List backups for droplet
   * List actions for droplet
   * Delete droplets by tag
   * List neighbors for droplet
   * List all droplet neighbors
   */
}
