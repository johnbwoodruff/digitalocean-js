import { Region } from './region';

export interface BlockStorage {
  id: string;
  region: Region;
  droplet_ids: number[];
  name: string;
  description: string;
  size_gigabytes: number;
  created_at: string;
}

export interface BlockStorageRequest {
  size_gigabytes: number;
  name: string;
  description?: string;
  region?: string;
  snapshot_id?: string;
}
