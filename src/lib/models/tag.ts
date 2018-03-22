import { Droplet } from './droplet';

export interface Tag {
  name: string;
  resources?: {
    droplets?: {
      count?: number;
      last_tagged?: Droplet;
    };
  };
}
