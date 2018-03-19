import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { Action } from '../models/action';
import { DropletActionRequest } from '../models/droplet';

export class DropletActionService {
  constructor() {}

  /**
   * Enable backups on an existing droplet
   */
  public enableBackupsForDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'enable_backups'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Disable backups on an existing droplet
   */
  public disableBackupsForDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'disable_backups'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Reboot a droplet
   */
  public rebootDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'reboot'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Power cycle a droplet (power off then on)
   */
  public powerCycleDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'power_cycle'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Shutdown a droplet
   */
  public shutdownDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'shutdown'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Power off a droplet
   */
  public powerOffDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'power_off'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Power on a droplet
   */
  public powerOnDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'power_on'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Restore a droplet using a backup image
   */
  public restoreDroplet(
    dropletId: number,
    image: string | number
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        image,
        type: 'restore'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Reset the password for a droplet
   */
  public passwordResetDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'password_reset'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Resize a droplet
   */
  public resizeDroplet(
    dropletId: number,
    resizeDisk: boolean,
    size: string
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        disk: resizeDisk,
        size,
        type: 'password_reset'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Rebuild a droplet
   */
  public rebuildDroplet(
    dropletId: number,
    image: string | number
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        image,
        type: 'rebuild'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Rename a droplet
   */
  public renameDroplet(dropletId: number, name: string): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        name,
        type: 'rename'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Change the kernel of a droplet
   */
  public changeDropletKernel(
    dropletId: number,
    kernelId: number
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        kernel: kernelId,
        type: 'change_kernel'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Enable IPv6 networking on an existing droplet
   */
  public enableIPv6(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'enable_ipv6'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Enable private networking on an existing droplet
   */
  public enablePrivateNetworking(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'enable_private_networking'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Take a snapshot of a droplet
   */
  public snapshotDroplet(dropletId: number, name: string): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        name,
        type: 'snapshot'
      };
      Axios.post(`${API_BASE_URL}/droplets/${dropletId}/actions`, actionRequest)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  // TODO: Implement the bulk action method, Acting on Tagged Droplets

  /**
   * Get a specific droplet action
   */
  public getExistingDropletAction(
    dropletId: number,
    actionId: number
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/droplets/${dropletId}/actions/${actionId}`)
        .then(response => {
          // Return actual action instead of wrapped action
          resolve(response.data.action);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
