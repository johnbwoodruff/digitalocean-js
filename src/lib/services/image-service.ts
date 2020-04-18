import { axios } from '../axios-instance';

import { Action } from '../models/action';
import { Image } from '../models/image';

export class ImageService {
  constructor() {}

  /**
   * Get all images on account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const images = await client.images.getAllImages();
   * ```
   */
  public getAllImages(): Promise<Image[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/images`)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const images = await client.images.getAllDistributionImages();
   * // Paginate images, 10 per page, starting on page 1
   * images = await client.images.getAllDistributionImages(10, 1);
   * ```
   */
  public getAllDistributionImages(
    perPage?: number,
    page?: number
  ): Promise<Image[]> {
    return new Promise((resolve, reject) => {
      page = page ? page : 1;
      perPage = perPage ? perPage : 25;
      axios
        .get(`/images?type=distribution&page=${page}&per_page=${perPage}`)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const images = await client.images.getAllApplicationImages();
   * // Paginate application images, 10 per page, starting on page 1
   * images = await client.images.getAllApplicationImages(10, 1);
   * ```
   */
  public getAllApplicationImages(
    perPage?: number,
    page?: number
  ): Promise<Image[]> {
    return new Promise((resolve, reject) => {
      page = page ? page : 1;
      perPage = perPage ? perPage : 25;
      axios
        .get(`/images?type=application&page=${page}&per_page=${perPage}`)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const images = await client.images.getUserImages();
   * // Paginate user images, 10 per page, starting on page 1
   * images = await client.images.getUserImages(10, 1);
   * ```
   */
  public getUserImages(perPage?: number, page?: number): Promise<Image[]> {
    return new Promise((resolve, reject) => {
      page = page ? page : 1;
      perPage = perPage ? perPage : 25;
      axios
        .get(`/images?private=true&page=${page}&per_page=${perPage}`)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const actions = await client.images.getImageActions('image-id');
   * ```
   */
  public getImageActions(imageId: number): Promise<Action[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/images/${imageId}/actions`)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const image = await client.images.getExistingImage('image-id');
   * ```
   */
  public getExistingImage(imageId: number): Promise<Image> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/images/${imageId}`)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const image = await client.images.getExistingImageBySlug('image-slug');
   * ```
   */
  public getExistingImageBySlug(imageSlug: string): Promise<Image> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/images/${imageSlug}`)
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const image = await client.images.updateImageName('image-id', 'New Image Name');
   * ```
   */
  public updateImageName(imageId: number, name: string): Promise<Image> {
    return new Promise((resolve, reject) => {
      axios
        .put(`/images/${imageId}`, { name })
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
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.images.deleteImage('image-id');
   * ```
   */
  public deleteImage(imageId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/images/${imageId}`)
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
