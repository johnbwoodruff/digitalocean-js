import Axios from 'axios';
import { DigitalOcean } from '../../digitalocean';
import { Environment } from '../../conf/environment';
export class ImageService extends DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new Environment();
        this.baseUrl = env.baseUrl;
        Axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        Axios.defaults.headers.common['Content-Type'] = `application/json`;
    }
    /**
     * Get all images on account
     *
     * @returns {Promise<Image[]>}
     * @memberof DropletService
     */
    getAllImages() {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/images`).then((response) => {
                // Return actual images instead of wrapped images
                resolve(response.data.images);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Get all distribution images
     *
     * @returns {Promise<Image[]>}
     * @memberof DropletService
     */
    getAllDistributionImages() {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/images?type=distribution`).then((response) => {
                // Return actual images instead of wrapped images
                resolve(response.data.images);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Get all application images
     *
     * @returns {Promise<Image[]>}
     * @memberof DropletService
     */
    getAllApplicationImages() {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/images?type=application`).then((response) => {
                // Return actual images instead of wrapped images
                resolve(response.data.images);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Get the private images of a user
     *
     * @returns {Promise<Image[]>}
     * @memberof DropletService
     */
    getUserImages() {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/images?private=true`).then((response) => {
                // Return actual images instead of wrapped images
                resolve(response.data.images);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Get all actions that have been executed on an image
     *
     * @param {number} imageId
     * @returns {Promise<Action[]>}
     * @memberof DropletService
     */
    getImageActions(imageId) {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/images/${imageId}/actions`).then((response) => {
                // Return actual actions instead of wrapped actions
                resolve(response.data.actions);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Get information about an image
     *
     * @param {number} imageId
     * @returns {Promise<Image>}
     * @memberof DropletService
     */
    getExistingImage(imageId) {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/images/${imageId}`).then((response) => {
                // Return actual image instead of wrapped image
                resolve(response.data.image);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Get information about an image by image slug
     *
     * @param {string} imageSlug
     * @returns {Promise<Image>}
     * @memberof DropletService
     */
    getExistingImageBySlug(imageSlug) {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/images/${imageSlug}`).then((response) => {
                // Return actual image instead of wrapped image
                resolve(response.data.image);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Update an image name
     *
     * @param {number} imageId
     * @param {string} name
     * @returns {Promise<Image>}
     * @memberof DropletService
     */
    updateImageName(imageId, name) {
        return new Promise((resolve, reject) => {
            Axios.put(`${this.baseUrl}/images/${imageId}`, { name: name }).then((response) => {
                // Return actual image instead of wrapped image
                resolve(response.data.image);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    /**
     * Delete an image
     *
     * @param {number} imageId
     * @returns {Promise<void>}
     * @memberof DropletService
     */
    deleteImage(imageId) {
        return new Promise((resolve, reject) => {
            Axios.delete(`${this.baseUrl}/images/${imageId}`).then((response) => {
                // Return actual image instead of wrapped image
                resolve();
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
//# sourceMappingURL=image-service.js.map