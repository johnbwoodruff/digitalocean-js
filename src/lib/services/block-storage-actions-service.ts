import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { Action, ActionRequest } from '../models/action';

export class BlockStorageActionService {
  constructor() {}

  /**
   * Attach a Block Storage volume to a droplet
   */
  public attachVolumeToDroplet(
    volumeId: string,
    actionRequest: ActionRequest
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/volumes/${volumeId}/actions`, actionRequest)
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
   * Attach a Block Storage volume to a droplet using the volume name
   */
  public attachVolumeToDropletByName(
    actionRequest: ActionRequest
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/volumes/actions`, actionRequest)
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
   * Detach a Block Storage volume from a droplet
   */
  public detachVolumeFromDroplet(
    volumeId: string,
    actionRequest: ActionRequest
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/volumes/${volumeId}/actions`, actionRequest)
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
   * Detach a Block Storage volume from a droplet using the volume name
   */
  public detachVolumeFromDropletByName(
    actionRequest: ActionRequest
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/volumes/actions`, actionRequest)
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
   * Resize a Block Storage volume
   */
  public resizeVolume(
    volumeId: string,
    actionRequest: ActionRequest
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/volumes/${volumeId}/actions`, actionRequest)
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
   * List all actions that have been executed on the specified volume.
   * Limited to 25 actions per page unless otherwise specified.
   */
  public getAllVolumeActions(
    volumeId: string,
    perPage?: number,
    page?: number
  ): Promise<Action[]> {
    page = page ? page : 1;
    perPage = perPage ? perPage : 25;
    return new Promise((resolve, reject) => {
      let url = `${API_BASE_URL}/volumes/${volumeId}/actions`;
      url += `?page=${page}`;
      url += `&per_page=${perPage}`;
      Axios.get(url)
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
   * Get an existing volume action based on the provided ID
   */
  public getExistingVolumeAction(
    volumeId: string,
    actionId: number
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/volumes/${volumeId}/actions/${actionId}`)
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
