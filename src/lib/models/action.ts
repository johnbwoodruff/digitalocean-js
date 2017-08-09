import { Region } from './region';

export interface Action {
  id: number;
  status: string;
  type: string;
  started_at: string;
  completed_at: string;
  resource_id: number;
  resource_type: string;
  region?: Region | string | null;
  region_slug?: string | null;
}