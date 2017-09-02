import { DigitalOcean } from '../../digitalocean';
import { Image } from '../../models/image';
import { Action } from '../../models/action';
export declare class ImageService extends DigitalOcean {
    private baseUrl;
    constructor(accessToken: string);
    /**
     * Get all images on account
     *
     * @returns {Promise<Image[]>}
     * @memberof DropletService
     */
    getAllImages(): Promise<Image[]>;
    /**
     * Get all distribution images
     *
     * @returns {Promise<Image[]>}
     * @memberof DropletService
     */
    getAllDistributionImages(page?: number, perPage?: number): Promise<Image[]>;
    /**
     * Get all application images
     *
     * @returns {Promise<Image[]>}
     * @memberof DropletService
     */
    getAllApplicationImages(page?: number, perPage?: number): Promise<Image[]>;
    /**
     * Get the private images of a user
     *
     * @returns {Promise<Image[]>}
     * @memberof DropletService
     */
    getUserImages(page?: number, perPage?: number): Promise<Image[]>;
    /**
     * Get all actions that have been executed on an image
     *
     * @param {number} imageId
     * @returns {Promise<Action[]>}
     * @memberof DropletService
     */
    getImageActions(imageId: number): Promise<Action[]>;
    /**
     * Get information about an image
     *
     * @param {number} imageId
     * @returns {Promise<Image>}
     * @memberof DropletService
     */
    getExistingImage(imageId: number): Promise<Image>;
    /**
     * Get information about an image by image slug
     *
     * @param {string} imageSlug
     * @returns {Promise<Image>}
     * @memberof DropletService
     */
    getExistingImageBySlug(imageSlug: string): Promise<Image>;
    /**
     * Update an image name
     *
     * @param {number} imageId
     * @param {string} name
     * @returns {Promise<Image>}
     * @memberof DropletService
     */
    updateImageName(imageId: number, name: string): Promise<Image>;
    /**
     * Delete an image
     *
     * @param {number} imageId
     * @returns {Promise<void>}
     * @memberof DropletService
     */
    deleteImage(imageId: number): Promise<void>;
}
