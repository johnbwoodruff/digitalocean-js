import { DigitalOcean } from '../../digitalocean';
import { Region } from '../../models/region';
export declare class RegionService extends DigitalOcean {
    private baseUrl;
    constructor(accessToken: string);
    /**
     * Get all regions
     *
     * @returns {Promise<Region[]>}
     * @memberof RegionService
     */
    getAllRegions(): Promise<Region[]>;
}
