import Axios from 'axios';

import { API_BASE_URL } from '../conf/environment';
import { Tag } from '../models/tag';

export class TagService {
  constructor() {}

  /**
   * Create new tag
   */
  public createTag(name: string): Promise<Tag> {
    return new Promise((resolve, reject) => {
      Axios.post(`${API_BASE_URL}/tags`, { name })
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
   */
  public getTags(): Promise<Tag> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/tags`)
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
   */
  public getTagByName(tagName: string): Promise<Tag> {
    return new Promise((resolve, reject) => {
      Axios.get(`${API_BASE_URL}/tags/${tagName}`)
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
   */
  public tagResources(tagName: string, resourceIds: string[]): Promise<void> {
    return new Promise((resolve, reject) => {
      const resources = resourceIds.map(id => {
        return {
          resource_id: id,
          resource_type: 'droplet'
        };
      });
      Axios.post(`${API_BASE_URL}/tags/${tagName}/resources`, { resources })
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
      Axios.delete(`${API_BASE_URL}/tags/${tagName}/resources`, {
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
   */
  public deleteTag(tagName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      Axios.delete(`${API_BASE_URL}/tags/${tagName}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
