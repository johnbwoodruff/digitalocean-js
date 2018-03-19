import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { Action } from '../models/action';
import { Image } from '../models/image';

export class ImageService {
  constructor() {}

  /**
   * Get all images on account
   */
  public getAllImages(): Promise<Image[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/images`)
        .then(response => {
          // Return actual images instead of wrapped images
          resolve(response.data.images);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get all distribution images
   */
  public getAllDistributionImages(
    perPage?: number,
    page?: number
  ): Promise<Image[]> {
    return new Promise((resolve, reject) => {
      page = page ? page : 1;
      perPage = perPage ? perPage : 25;
      Axios.get(
        `${API_BASE_URL}/images?type=distribution&page=${page}&per_page=${perPage}`
      )
        .then(response => {
          // Return actual images instead of wrapped images
          resolve(response.data.images);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get all application images
   */
  public getAllApplicationImages(
    perPage?: number,
    page?: number
  ): Promise<Image[]> {
    return new Promise((resolve, reject) => {
      page = page ? page : 1;
      perPage = perPage ? perPage : 25;
      Axios.get(
        `${API_BASE_URL}/images?type=application&page=${page}&per_page=${perPage}`
      )
        .then(response => {
          // Return actual images instead of wrapped images
          resolve(response.data.images);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get the private images of a user
   */
  public getUserImages(perPage?: number, page?: number): Promise<Image[]> {
    return new Promise((resolve, reject) => {
      page = page ? page : 1;
      perPage = perPage ? perPage : 25;
      Axios.get(
        `${API_BASE_URL}/images?private=true&page=${page}&per_page=${perPage}`
      )
        .then(response => {
          // Return actual images instead of wrapped images
          resolve(response.data.images);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get all actions that have been executed on an image
   */
  public getImageActions(imageId: number): Promise<Action[]> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/images/${imageId}/actions`)
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
   * Get information about an image
   */
  public getExistingImage(imageId: number): Promise<Image> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/images/${imageId}`)
        .then(response => {
          // Return actual image instead of wrapped image
          resolve(response.data.image);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get information about an image by image slug
   */
  public getExistingImageBySlug(imageSlug: string): Promise<Image> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/images/${imageSlug}`)
        .then(response => {
          // Return actual image instead of wrapped image
          resolve(response.data.image);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Update an image name
   */
  public updateImageName(imageId: number, name: string): Promise<Image> {
    return new Promise((resolve, reject) => {
      Axios.put(`${API_BASE_URL}/images/${imageId}`, { name })
        .then(response => {
          // Return actual image instead of wrapped image
          resolve(response.data.image);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete an image
   */
  public deleteImage(imageId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${API_BASE_URL}/images/${imageId}`)
        .then(() => {
          // Return actual image instead of wrapped image
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
