import { axios } from '../axios-instance';

import { Action } from '../models/action';
import { DropletActionRequest } from '../models/droplet';

export class DropletActionService {
  constructor() {}

  /**
   * Enable backups on an existing droplet
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions.enableBackupsForDroplet('droplet-id');
   * ```
   */
  public enableBackupsForDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'enable_backups'
      };
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions.disableBackupsForDroplet('droplet-id');
   * ```
   */
  public disableBackupsForDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'disable_backups'
      };
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions.rebootDroplet('droplet-id');
   * ```
   */
  public rebootDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'reboot'
      };
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions.powerCycleDroplet('droplet-id');
   * ```
   */
  public powerCycleDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'power_cycle'
      };
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions.shutdownDroplet('droplet-id');
   * ```
   */
  public shutdownDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'shutdown'
      };
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions.powerOffDroplet('droplet-id');
   * ```
   */
  public powerOffDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'power_off'
      };
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions.powerOnDroplet('droplet-id');
   * ```
   */
  public powerOnDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'power_on'
      };
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions.restoreDroplet('droplet-id', 12389723);
   * ```
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
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions.passwordResetDroplet('droplet-id');
   * ```
   */
  public passwordResetDroplet(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'password_reset'
      };
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions
   *    .resizeDroplet('droplet-id', true, '1gb');
   * ```
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
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions
   *    .rebuildDroplet('droplet-id', 'ubuntu-16-04-x64');
   * ```
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
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions
   *    .renameDroplet('droplet-id', 'nifty-new-name');
   * ```
   */
  public renameDroplet(dropletId: number, name: string): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        name,
        type: 'rename'
      };
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions
   *    .renameDroplet('droplet-id', 991);
   * ```
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
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions.enableIPv6('droplet-id');
   * ```
   */
  public enableIPv6(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'enable_ipv6'
      };
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions.enablePrivateNetworking('droplet-id');
   * ```
   */
  public enablePrivateNetworking(dropletId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        type: 'enable_private_networking'
      };
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions
   *    .snapshotDroplet('droplet-id', 'Nifty New Snapshot');
   * ```
   */
  public snapshotDroplet(dropletId: number, name: string): Promise<Action> {
    return new Promise((resolve, reject) => {
      const actionRequest: DropletActionRequest = {
        name,
        type: 'snapshot'
      };
      axios
        .post(`/droplets/${dropletId}/actions`, actionRequest)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const action = await client.dropletActions
   *    .getExistingDropletAction('droplet-id', 'action-id');
   * ```
   */
  public getExistingDropletAction(
    dropletId: number,
    actionId: number
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/droplets/${dropletId}/actions/${actionId}`)
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
