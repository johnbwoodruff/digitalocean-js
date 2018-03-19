import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { Action } from '../models/action';
import { Backup } from '../models/backup';
import { Droplet, DropletRequest } from '../models/droplet';
import { Kernel } from '../models/kernel';
import { Snapshot } from '../models/snapshot';

export class DropletService {
  constructor() {}

  /**
   * Create a new droplet
   */
  public createNewDroplet(dropletRequest: DropletRequest): Promise<Droplet> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/droplets`, dropletRequest)
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
   */
  public createMultipleDroplets(
    dropletsRequest: DropletRequest
  ): Promise<Droplet[]> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/droplets`, dropletsRequest)
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
   */
  public getExistingDroplet(dropletId: number): Promise<Droplet> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/droplets/${dropletId}`)
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
   */
  public getAllDroplets(): Promise<Droplet[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/droplets`)
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
   */
  public getDropletsByTag(tag: string): Promise<Droplet[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/droplets?tag_name=${tag}`)
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
   */
  public getAvailableKernelsForDroplet(dropletId: number): Promise<Kernel[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/droplets/${dropletId}/kernels`)
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
   */
  public getSnapshotsForDroplet(dropletId: number): Promise<Snapshot[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/droplets/${dropletId}/snapshots`)
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
   */
  public getBackupsForDroplet(dropletId: number): Promise<Backup[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/droplets/${dropletId}/backups`)
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
   */
  public getDropletActions(dropletId: number): Promise<Action[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/droplets/${dropletId}/actions`)
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
   */
  public deleteDroplet(dropletId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${API_BASE_URL}/droplets/${dropletId}`)
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
   */
  public deleteDropletsByTag(tag: string): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${API_BASE_URL}/droplets?tag_name=${tag}`)
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
   */
  public getNeighborsForDroplet(dropletId: number): Promise<Droplet[]> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${API_BASE_URL}/droplets/${dropletId}/neighbors`)
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
   */
  public getDropletNeighbors(): Promise<Droplet[][]> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${API_BASE_URL}/reports/droplet_neighbors`)
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
