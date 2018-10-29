export enum ProjectPurpose {
  Trying = 'Just trying out DigitalOcean',
  Educational = 'Class project / Educational purposes',
  Website = 'Website or blog',
  WebApp = 'Web Application',
  Api = 'Service or API',
  Mobile = 'Mobile Application',
  MachineLearning = 'Machine learning / AI / Data processing',
  IoT = 'IoT',
  DevTooling = 'Operational / Developer tooling'
}

export type ProjectEnvironment = 'Development' | 'Staging' | 'Production';

export interface Project {
  id?: string;
  owner_uuid?: string;
  owner_id?: number;
  name?: string;
  description?: string;
  purpose?: string;
  environment?: ProjectEnvironment;
  is_default?: boolean;
  created_at?: string;
  updated_at?: string;
}

export type ProjectResourceStatus =
  | 'ok'
  | 'not_found'
  | 'assigned'
  | 'already_assigned'
  | 'service_down';

export interface ProjectResource {
  urn: string;
  assigned_at: string;
  links: string;
  status: ProjectResourceStatus;
}

export const RESOURCE_PREFIX = {
  DOMAIN: 'do:domain:',
  DROPLET: 'do:droplet:',
  FLOATING_IP: 'do:floatingip:',
  LOAD_BALANCER: 'do:loadbalancer:',
  SPACE: 'do:space:',
  VOLUME: 'do:volume:'
};
