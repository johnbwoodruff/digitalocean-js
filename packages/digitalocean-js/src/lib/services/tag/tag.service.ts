import { Tag } from '../../models';

import { instance } from '../../axios-instance';

export class TagService {
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
    return instance.post(`/tags`, { name }).then(response => response.data.tag);
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
    return instance.get(`/tags`).then(response => response.data.tags);
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
    return instance.get(`/tags/${tagName}`).then(response => response.data.tag);
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
    const resources = resourceIds.map(id => {
      return {
        resource_id: id,
        resource_type: 'droplet'
      };
    });
    return instance.post(`/tags/${tagName}/resources`, { resources });
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
    const resources = resourceIds.map(id => {
      return {
        resource_id: id,
        resource_type: 'droplet'
      };
    });
    return instance.delete(`/tags/${tagName}/resources`, {
      data: { resources }
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
    return instance.delete(`/tags/${tagName}`);
  }
}
