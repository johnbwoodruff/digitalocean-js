import { Droplet } from './droplet';
import { Region } from './region';

export interface FloatingIP {
  ip: string;
  region: Region;
  droplet: Droplet;
}
