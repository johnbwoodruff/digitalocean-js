export interface Snapshot {
  id: string;
  name: string;
  created_at: string;
  regions: string[];
  resource_id: string;
  resource_type: string;
  min_disk_size: number;
  size_gigabytes: number;
}
