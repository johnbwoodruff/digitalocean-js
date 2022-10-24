export interface Image {
  id: number;
  name: string;
  type: string;
  distribution: string;
  slug: string | null;
  public: boolean;
  regions: string[];
  min_disk_size: number;
  size_gigabytes: number;
  created_at: string;
}

export interface ImageActionRequest {
  type: string;
  region?: string;
}
