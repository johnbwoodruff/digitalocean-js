import { instance } from '../../axios-instance';

import {
  Firewall,
  FirewallInboundRule,
  FirewallOutboundRule
} from '../../models/firewall';

export class FirewallService {
  /**
   * Create a new Cloud Firewall
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const newFirewall = {
   *   "name": "firewall",
   *   "inbound_rules": [
   *     {
   *       "protocol": "tcp",
   *       "ports": "80",
   *       "sources": {
   *         "load_balancer_uids": [
   *           "4de7ac8b-495b-4884-9a69-1050c6793cd6"
   *         ]
   *       }
   *     },
   *     {
   *       "protocol": "tcp",
   *       "ports": 22,
   *       "sources": {
   *         "tags": [
   *           "gateway"
   *         ],
   *         "addresses": [
   *           "18.0.0.0/8"
   *         ]
   *       }
   *     }
   *   ],
   *   "outbound_rules": [
   *     {
   *       "protocol": "tcp",
   *       "ports": "80",
   *       "destinations": {
   *         "addresses": [
   *           "0.0.0.0/0",
   *           "::/0"
   *         ]
   *       }
   *     }
   *   ],
   *   "droplet_ids": [
   *     8043964
   *   ],
   *   "tags": null
   * };
   * const firewall = await client.firewalls.createFirewall(newFirewall);
   * ```
   */
  public createFirewall(firewall: Firewall): Promise<Firewall> {
    return instance
      .post(`/firewalls`, firewall)
      .then(response => response.data.firewall);
  }

  /**
   * Show information about an existing Cloud Firewall
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const firewall = await client.firewalls.getExistingFirewall('firewall-id');
   * ```
   */
  public getExistingFirewall(firewallId: string): Promise<Firewall> {
    return instance
      .get(`/firewalls/${firewallId}`)
      .then(response => response.data.firewall);
  }

  /**
   * List all of the Cloud Firewalls available on your account
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const firewall = await client.firewalls.getAllFirewalls();
   * ```
   */
  public getAllFirewalls(): Promise<Firewall[]> {
    return instance.get(`/firewalls`).then(response => response.data.firewalls);
  }

  /**
   * Update the configuration of an existing Cloud Firewall
   *
   * **NOTE: Any attributes that are not provided will be reset to their default values.**
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const updatedFirewall = {
   *   "name": "firewall",
   *   "inbound_rules": [
   *     {
   *       "protocol": "tcp",
   *       "ports": "8080",
   *       "sources": {
   *         "load_balancer_uids": [
   *           "4de7ac8b-495b-4884-9a69-1050c6793cd6"
   *         ]
   *       }
   *     },
   *     {
   *       "protocol": "tcp",
   *       "ports": 22,
   *       "sources": {
   *         "tags": [
   *           "gateway"
   *         ],
   *         "addresses": [
   *           "18.0.0.0/8"
   *         ]
   *       }
   *     }
   *   ],
   *   "outbound_rules": [
   *     {
   *       "protocol": "tcp",
   *       "ports": "8080",
   *       "destinations": {
   *         "addresses": [
   *           "0.0.0.0/0",
   *           "::/0"
   *         ]
   *       }
   *     }
   *   ],
   *   "droplet_ids": [
   *     8043964
   *   ],
   *   "tags": [
   *     "frontend"
   *   ]
   * };
   * const firewall = await client.firewalls.updateFirewall(updatedFirewall);
   * ```
   */
  public updateFirewall(firewall: Firewall): Promise<Firewall> {
    return instance
      .put(`/firewalls/${firewall.id}`, firewall)
      .then(response => response.data.firewall);
  }

  /**
   * Delete a Cloud Firewall
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.firewalls.deleteFirewall('firewall-id');
   * ```
   */
  public deleteFirewall(firewallId: string): Promise<void> {
    return instance.delete(`/firewalls/${firewallId}`);
  }

  /**
   * Assign Droplets to a Cloud Firewall
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const dropletIds = [
   *    'droplet-id-1',
   *    'droplet-id-2'
   * ];
   * await client.firewalls.addDropletsToFirewall('firewall-id', dropletIds);
   * ```
   */
  public addDropletsToFirewall(
    firewallId: string,
    dropletIds: number[]
  ): Promise<void> {
    const request = {
      droplet_ids: dropletIds
    };
    return instance.post(`/firewalls/${firewallId}/droplets`, request);
  }

  /**
   * Remove Droplets from a Cloud Firewall
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const dropletIds = [
   *    'droplet-id-1',
   *    'droplet-id-2'
   * ];
   * await client.firewalls.removeDropletsFromFirewall('firewall-id', dropletIds);
   * ```
   */
  public removeDropletsFromFirewall(
    firewallId: string,
    dropletIds: number[]
  ): Promise<void> {
    const request = {
      droplet_ids: dropletIds
    };
    return instance.delete(`/firewalls/${firewallId}/droplets`, {
      data: request
    });
  }

  /**
   * Assign a Tag representing a group of Droplets to a Cloud Firewall
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const tags = [
   *    'my-tag-1',
   *    'my-tag-2'
   * ];
   * await client.firewalls.addTagsToFirewall('firewall-id', tags);
   * ```
   */
  public addTagsToFirewall(firewallId: string, tags: string[]): Promise<void> {
    const request = {
      tags
    };
    return instance.post(`/firewalls/${firewallId}/tags`, request);
  }

  /**
   * Remove a Tag representing a group of Droplets from a Cloud Firewall
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const tags = [
   *    'my-tag-1',
   *    'my-tag-2'
   * ];
   * await client.firewalls.removeTagsFromFirewall('firewall-id', tags);
   * ```
   */
  public removeTagsFromFirewall(
    firewallId: string,
    tags: string[]
  ): Promise<void> {
    const request = {
      tags
    };
    return instance.delete(`/firewalls/${firewallId}/tags`, {
      data: request
    });
  }

  /**
   * Add additional access rules to a Cloud Firewall
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const inboundRules = [
   *   {
   *     "protocol": "tcp",
   *     "ports": "3306",
   *     "sources": {
   *       "droplet_ids": [
   *         49696269
   *       ]
   *     }
   *   }
   * ];
   * outboundRules = [
   *   {
   *     "protocol": "tcp",
   *     "ports": "3306",
   *     "destinations": {
   *       "droplet_ids": [
   *         49696269
   *       ]
   *     }
   *   }
   * ];
   * await client.firewalls.addRulesToFirewall('firewall-id', inboundRules, outboundRules);
   * ```
   */
  public addRulesToFirewall(
    firewallId: string,
    inboundRules: FirewallInboundRule[],
    outboundRules: FirewallOutboundRule[]
  ): Promise<void> {
    const request = {
      inbound_rules: inboundRules,
      outbound_rules: outboundRules
    };
    return instance.post(`/firewalls/${firewallId}/rules`, request);
  }

  /**
   * Remove access rules from a Cloud Firewall
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const inboundRules = [
   *   {
   *     "protocol": "tcp",
   *     "ports": "3306",
   *     "sources": {
   *       "droplet_ids": [
   *         49696269
   *       ]
   *     }
   *   }
   * ];
   * outboundRules = [
   *   {
   *     "protocol": "tcp",
   *     "ports": "3306",
   *     "destinations": {
   *       "droplet_ids": [
   *         49696269
   *       ]
   *     }
   *   }
   * ];
   * await client.firewalls.removeRulesFromFirewall('firewall-id', inboundRules, outboundRules);
   * ```
   */
  public removeRulesFromFirewall(
    firewallId: string,
    inboundRules: FirewallInboundRule[],
    outboundRules: FirewallOutboundRule[]
  ): Promise<void> {
    const request = {
      inbound_rules: inboundRules,
      outbound_rules: outboundRules
    };
    return instance.delete(`/firewalls/${firewallId}/rules`, {
      data: request
    });
  }
}
