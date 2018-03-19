import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { Action } from '../models/action';
import { ImageActionRequest } from '../models/image';

export class ImageActionService {
  constructor() {}

  /**
   * Transfer an image to another region
   */
  public transferImage(
    imageId: number,
    request: ImageActionRequest
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/images/${imageId}/actions`, request)
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
   * Convert an image (a backup for example) to a snapshot
   */
  public convertImageToSnapshot(
    imageId: number,
    request: ImageActionRequest
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/images/${imageId}/actions`, request)
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
   * Retrieve the status of an image action
   */
  public getExistingImageAction(
    imageId: number,
    actionId: number
  ): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/images/${imageId}/actions/${actionId}`)
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
