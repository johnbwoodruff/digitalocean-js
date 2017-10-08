import Axios from 'axios';

import { DigitalOcean } from '../../digitalocean';
import { Environment } from '../../conf/environment';
import { Action } from '../../models/action';
import { Image, ImageActionRequest } from '../../models/image';

export class ImageActionService extends DigitalOcean {
  private baseUrl: string;

  constructor(accessToken: string) {
    super(accessToken);
    const env = new Environment();
    this.baseUrl = env.baseUrl;
    Axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
    Axios.defaults.headers.common['Content-Type'] = `application/json`;
  }

  /**
   * Transfer an image to another region
   *
   * @param {number} imageId
   * @param {ImageActionRequest} request
   * @returns {Promise<Action>}
   * @memberof ImageActionService
   */
  public transferImage(imageId: number, request: ImageActionRequest): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.post(`${this.baseUrl}/images/${imageId}/actions`, request).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Convert an image (a backup for example) to a snapshot
   *
   * @param {number} imageId
   * @param {ImageActionRequest} request
   * @returns {Promise<Action>}
   * @memberof ImageActionService
   */
  public convertImageToSnapshot(imageId: number, request: ImageActionRequest): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.post(`${this.baseUrl}/images/${imageId}/actions`, request).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  /**
   * Retrieve the status of an image action
   *
   * @param {number} imageId
   * @param {number} actionId
   * @returns {Promise<Action>}
   * @memberof ImageActionService
   */
  public getExistingImageAction(imageId: number, actionId: number): Promise<Action> {
    return new Promise((resolve, reject) => {
      Axios.get(`${this.baseUrl}/images/${imageId}/actions/${actionId}`).then((response) => {
        // Return actual action instead of wrapped action
        resolve(response.data.action);
      }).catch((error) => {
        reject(error);
      });
    });
  }
}
