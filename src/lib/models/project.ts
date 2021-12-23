/**
 * Various project purpose strings in enum form
 *
 * You can use as follows:
 *
 * ```js
 * import { ProjectPurpose } from 'digitalocean-js;
 *
 * console.log(ProjectPurpose.Website); // Prints "Website or blog"
 * ```
 */
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

/**
 * The structure of a parsed Project Resource URN
 */
export interface ProjectResourceParsedUrn {
  id: string;
  type: string;
}

/**
 * Defines the resource type keys
 */
export enum RESOURCE_TYPE {
  DATABASE = 'dbaas',
  DOMAIN = 'domain',
  DROPLET = 'droplet',
  FLOATING_IP = 'floatingip',
  KUBERNETES_CLUSTER = 'kubernetes',
  LOAD_BALANCER = 'loadbalancer',
  SPACE = 'space',
  VOLUME = 'volume'
}

/**
 * Defines the resource prefixes for various resource types
 */
export enum RESOURCE_PREFIX {
  DATABASE = 'do:dbaas:',
  DOMAIN = 'do:domain:',
  DROPLET = 'do:droplet:',
  FLOATING_IP = 'do:floatingip:',
  KUBERNETES_CLUSTER = 'do:kubernetes:',
  LOAD_BALANCER = 'do:loadbalancer:',
  SPACE = 'do:space:',
  VOLUME = 'do:volume:'
}
