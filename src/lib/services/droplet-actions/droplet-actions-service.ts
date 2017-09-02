import Axios from 'axios';

import { DigitalOcean } from '../../digitalocean';
import { Environment } from '../../conf/environment';
import { Action } from '../../models/action';
import { DropletActionRequest } from '../../models/droplet';

export class DropletActionService extends DigitalOcean {
  private baseUrl: string;

  constructor(accessToken: string) {
    super(accessToken);
    const env = new Environment();
    this.baseUrl = env.baseUrl;
    Axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
    Axios.defaults.headers.common['Content-Type'] = `application/json`;
  }

  /**
   * Enable backups on an existing droplet
   *
   * @param {number} dropletId
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public enableBackupsForDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'enable_backups'
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Disable backups on an existing droplet
   *
   * @param {number} dropletId
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public disableBackupsForDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'disable_backups'
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Reboot a droplet
   *
   * @param {number} dropletId
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public rebootDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'reboot'
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Power cycle a droplet (power off then on)
   *
   * @param {number} dropletId
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public powerCycleDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'power_cycle'
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Shutdown a droplet
   *
   * @param {number} dropletId
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public shutdownDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'shutdown'
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Power off a droplet
   *
   * @param {number} dropletId
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public powerOffDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'power_off'
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Power on a droplet
   *
   * @param {number} dropletId
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public powerOnDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'power_on'
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Restore a droplet using a backup image
   *
   * @param {number} dropletId
   * @param {(string | number)} image
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public restoreDroplet(dropletId: number, image: string | number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'restore',
        image: image
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Reset the password for a droplet
   *
   * @param {number} dropletId
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public passwordResetDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'password_reset'
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Resize a droplet
   *
   * @param {number} dropletId
   * @param {boolean} resizeDisk
   * @param {string} size
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public resizeDroplet(dropletId: number, resizeDisk: boolean, size: string): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'password_reset',
        disk: resizeDisk,
        size: size
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Rebuild a droplet
   *
   * @param {number} dropletId
   * @param {(string | number)} image
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public rebuildDroplet(dropletId: number, image: string | number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'rebuild',
        image: image
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Rename a droplet
   *
   * @param {number} dropletId
   * @param {string} name
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public renameDroplet(dropletId: number, name: string): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'rename',
        name: name
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Change the kernel of a droplet
   *
   * @param {number} dropletId
   * @param {number} kernelId
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public changeDropletKernel(dropletId: number, kernelId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'change_kernel',
        kernel: kernelId
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Enable IPv6 networking on an existing droplet
   *
   * @param {number} dropletId
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public enableIPv6(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'enable_ipv6'
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Enable private networking on an existing droplet
   *
   * @param {number} dropletId
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public enablePrivateNetworking(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'enable_private_networking'
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Take a snapshot of a droplet
   *
   * @param {number} dropletId
   * @param {string} name
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public snapshotDroplet(dropletId: number, name: string): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'snapshot',
        name: name
      };
      Axios.post(`${this.baseUrl}/droplets/${dropletId}/actions`, actionRequest).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  // TODO: Implement the bulk action method, Acting on Tagged Droplets

  /**
   * Get a specific droplet action
   *
   * @param {number} dropletId
   * @param {number} actionId
   * @returns {Promise<Action>}
   * @memberof DropletService
   */
  public getExistingDropletAction(dropletId: number, actionId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/droplets/${dropletId}/actions/${actionId}`).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}
