import { axios } from '../axios-instance';

import { Tag } from '../models/tag';

export class TagService {
  constructor() {}

  /**
   * Create new tag
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const tag = await client.tags.createTag('new-tag');
   * ```
   */
  public createTag(name: string): Promise<Tag> {
    return new Promise((resolve, reject) => {
      axios
        .post(`/tags`, { name })
        .then(response => {
          // Return actual tag instead of wrapped tag
          resolve(response.data.tag);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get all tags on the account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const tags = await client.tags.getTags();
   * ```
   */
  public getTags(): Promise<Tag> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/tags`)
        .then(response => {
          // Return actual tags instead of wrapped tags
          resolve(response.data.tags);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get a specific existing tag by name
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const tag = await client.tags.getTagByName('tag-name');
   * ```
   */
  public getTagByName(tagName: string): Promise<Tag> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/tags/${tagName}`)
        .then(response => {
          // Return actual tag instead of wrapped tag
          resolve(response.data.tag);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Add tag to specified resources
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const resources = [
   *    'droplet-id-1',
   *    'droplet-id-2',
   *    'droplet-id-3'
   * ];
   * await client.tags.tagResources('tag-name', resources);
   * ```
   */
  public tagResources(tagName: string, resourceIds: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      const resources = resourceIds.map(id => {
        return {
          resource_id: id,
          resource_type: 'droplet'
        };
      });
      axios
        .post(`/tags/${tagName}/resources`, { resources })
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Remove tag from specified resources
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const resources = [
   *    'droplet-id-1',
   *    'droplet-id-2',
   *    'droplet-id-3'
   * ];
   * await client.tags.removeTagFromResources('tag-name', resources);
   * ```
   */
  public removeTagFromResources(
    tagName: string,
    resourceIds: string[]
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const resources = resourceIds.map(id => {
        return {
          resource_id: id,
          resource_type: 'droplet'
        };
      });
      axios
        .delete(`/tags/${tagName}/resources`, {
          data: { resources }
        })
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete a tag by tag name
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.tags.deleteTag('tag-name');
   * ```
   */
  public deleteTag(tagName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/tags/${tagName}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
