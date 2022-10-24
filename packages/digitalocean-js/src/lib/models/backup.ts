export interface Backup {
  id: number;
  name: string;
  type: string;
  distribution: string;
  slug: string | null;
  public: boolean;
  regions: string[];
  min_disk_size: number;
  created_at: string;
}
