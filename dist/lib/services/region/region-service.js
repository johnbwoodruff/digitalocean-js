import Axios from 'axios';
import { DigitalOcean } from '../../digitalocean';
import { Environment } from '../../conf/environment';
export class RegionService extends DigitalOcean {
    constructor(accessToken) {
        super(accessToken);
        const env = new Environment();
        this.baseUrl = env.baseUrl;
        Axios.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
        Axios.defaults.headers.common['Content-Type'] = `application/json`;
    }
    /**
     * Get all regions
     *
     * @returns {Promise<Region[]>}
     * @memberof RegionService
     */
    getAllRegions() {
        return new Promise((resolve, reject) => {
            Axios.get(`${this.baseUrl}/regions`).then((response) => {
                // Return actual regions instead of wrapped regions
                resolve(response.data.regions);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
//# sourceMappingURL=region-service.js.map