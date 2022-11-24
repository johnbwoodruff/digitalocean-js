import { Action, DropletActionRequest } from '../../models';

import { instance } from '../../axios-instance';

export class DropletActionService {
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
    const actionRequest: DropletActionRequest = {
      type: 'enable_backups'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      type: 'disable_backups'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      type: 'reboot'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      type: 'power_cycle'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      type: 'shutdown'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      type: 'power_off'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      type: 'power_on'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      image,
      type: 'restore'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      type: 'password_reset'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      disk: resizeDisk,
      size,
      type: 'resize'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      image,
      type: 'rebuild'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      name,
      type: 'rename'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      kernel: kernelId,
      type: 'change_kernel'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      type: 'enable_ipv6'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      type: 'enable_private_networking'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    const actionRequest: DropletActionRequest = {
      name,
      type: 'snapshot'
    };
    return instance
      .post(`/droplets/${dropletId}/actions`, actionRequest)
      .then(response => response.data.action);
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
    return instance
      .get(`/droplets/${dropletId}/actions/${actionId}`)
      .then(response => response.data.action);
  }
}
