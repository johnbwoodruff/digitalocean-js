import { instance } from '../../axios-instance';

import {
  Project,
  ProjectPurpose,
  ProjectResource,
  ProjectResourceParsedUrn
} from '../../models/project';

export class ProjectService {
  /**
   * Get all projects on your account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const projects = await client.projects.getAllProjects();
   * ```
   */
  public getAllProjects(): Promise<Project[]> {
    return instance.get(`/projects`).then(response => response.data.projects);
  }

  /**
   * Get an existing project
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const project = await client.projects.getExistingProject('project-id');
   * ```
   */
  public getExistingProject(id: string): Promise<Project> {
    return instance
      .get(`/projects/${id}`)
      .then(response => response.data.project);
  }

  /**
   * Get the default project
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const project = await client.projects.getDefaultProject();
   * ```
   */
  public getDefaultProject(): Promise<Project> {
    return this.getExistingProject('default');
  }

  /**
   * Create a new project
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   "name": "my-web-api",
   *   "description": "My website API",
   *   "purpose": "Service or API",
   *   "environment": "Production"
   * };
   * const project = await client.projects.createProject(request);
   * ```
   */
  public createProject(project: Project): Promise<Project> {
    if (!this.createProjectIsValid(project)) {
      throw new Error('Required fields missing from the Project Object');
    }
    if (!this.purposeIsValid(project.purpose)) {
      throw new Error(
        'Project purpose is not one of the allowed values. Use a proper purpose value.'
      );
    }
    return instance
      .post(`/projects`, project)
      .then(response => response.data.project);
  }

  /**
   * Update an existing project
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   "name": "my-web-api",
   *   "description": "My website API",
   *   "purpose": "Service or API",
   *   "environment": "Staging",
   *   "is_default": false
   * };
   * const project = await client.projects.updateProject('project-id', request);
   * ```
   */
  public updateProject(id: string, project: Project): Promise<Project> {
    if (!this.projectIsValid(project)) {
      throw new Error('Required fields missing from the Project Object');
    }
    if (!this.purposeIsValid(project.purpose)) {
      throw new Error(
        'Project purpose is not one of the allowed values. Use a proper purpose value.'
      );
    }
    return instance
      .put(`/projects/${id}`, project)
      .then(response => response.data.project);
  }

  /**
   * Update the default project
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   "name": "my-web-api",
   *   "description": "My website API",
   *   "purpose": "Service or API",
   *   "environment": "Staging",
   *   "is_default": true
   * };
   * const project = await client.projects.updateDefaultProject(request);
   * ```
   */
  public updateDefaultProject(project: Project): Promise<Project> {
    return this.updateProject('default', project);
  }

  /**
   * Delete an existing project
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.projects.deleteProject('project-id');
   * ```
   */
  public async deleteProject(id: string): Promise<void> {
    return instance.delete(`/projects/${id}`);
  }

  /**
   * Get all resources attached to a specific project
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const resources = await client.projects.getProjectResources('project-id');
   * ```
   */
  public getProjectResources(id: string): Promise<ProjectResource[]> {
    return instance
      .get(`/projects/${id}/resources`)
      .then(response => response.data.resources);
  }

  /**
   * Get all resources attached to the default project
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const resources = await client.projects.getDefaultProjectResources();
   * ```
   */
  public getDefaultProjectResources(): Promise<ProjectResource[]> {
    return this.getProjectResources('default');
  }

  /**
   * Assign resources to an existing project
   *
   * ### Example
   * ```js
   * import { DigitalOcean, RESOURCE_PREFIX } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const dropletId = 1;
   * const ip = '192.168.99.100';
   * // Build resource urns using RESOURCE_PREFIX constant provided.
   * const resources = [
   *    `${RESOURCE_PREFIX.DROPLET}${dropletId}`, // 'do:droplet:1'
   *    `${RESOURCE_PREFIX.FLOATING_IP}${ip}`     // 'do:floatingip:192.168.99.100'
   * ];
   * const resources = await client.projects
   *    .assignResourcesToProject('project-id', resources);
   * ```
   */
  public assignResourcesToProject(
    id: string,
    resources: string[]
  ): Promise<ProjectResource[]> {
    return instance
      .post(`/projects/${id}/resources`, { resources })
      .then(response => response.data.resources);
  }

  /**
   * Assign resources to the default project
   *
   * ### Example
   * ```js
   * import { DigitalOcean, RESOURCE_PREFIX } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const dropletId = 1;
   * const ip = '192.168.99.100';
   * // Build resource urns using RESOURCE_PREFIX constant provided.
   * const resources = [
   *    `${RESOURCE_PREFIX.DROPLET}${dropletId}`, // 'do:droplet:1'
   *    `${RESOURCE_PREFIX.FLOATING_IP}${ip}`     // 'do:floatingip:192.168.99.100'
   * ];
   * const resources = await client.projects
   *    .assignResourcesToDefaultProject(resources);
   * ```
   */
  public assignResourcesToDefaultProject(
    resources: string[]
  ): Promise<ProjectResource[]> {
    return this.assignResourcesToProject('default', resources);
  }

  /**
   * Parses a Project Resource URN into its various parts
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const urn = 'do:droplet:4126873';
   * const resource = await client.projects
   *    .parseProjectResourceUrn(urn);
   * ```
   */
  public parseProjectResourceUrn(urn: string): ProjectResourceParsedUrn {
    const parts = urn.split(':');
    if (parts[0] !== 'do' || parts.length !== 3) {
      throw new Error(
        `URN expected in the format of 'do:resource_type:resource_id'`
      );
    }
    return {
      id: parts[2],
      type: parts[1]
    };
  }

  ////////// Validation Methods //////////
  private projectIsValid(project: Project): boolean {
    if (!project.name || !project.description || !project.purpose) {
      return false;
    }
    return true;
  }

  private createProjectIsValid(project: Project): boolean {
    if (!project.name || !project.purpose) {
      return false;
    }
    return true;
  }

  private purposeIsValid(purpose?: string): boolean {
    if (!purpose) {
      return false;
    }
    if (!Object.values(ProjectPurpose as object).includes(purpose)) {
      // Purpose doesn't correspond to allowed values. Check if Other.
      if (purpose.substring(0, 7) !== 'Other: ') {
        return false;
      }
    }
    return true;
  }
}
