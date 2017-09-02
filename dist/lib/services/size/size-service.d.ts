import { DigitalOcean } from '../../digitalocean';
import { Size } from '../../models/size';
export declare class SizeService extends DigitalOcean {
    private baseUrl;
    constructor(accessToken: string);
    /**
     * Get all sizes
     *
     * @returns {Promise<Size[]>}
     * @memberof SizeService
     */
    getAllSizes(): Promise<Size[]>;
}
