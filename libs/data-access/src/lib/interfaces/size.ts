export interface Size {
  slug: string;
  available: boolean;
  transfer: number;
  price_monthly: number;
  price_hourly: number;
  memory: number;
  vcpus: number;
  disk: number;
  regions: string[];
}
