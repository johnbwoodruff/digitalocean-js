import { axios } from '../axios-instance';

import {
  ForwardingRule,
  HealthCheck,
  LoadBalancer
} from '../models/load-balancer';

export class LoadBalancerService {
  constructor() {}

  /**
   * Create a new Load Balancer
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   *
   * const lb = {
   *   "name": "example-lb-01",
   *   "region": "nyc3",
   *   "forwarding_rules": [
   *     {
   *       "entry_protocol": "http",
   *       "entry_port": 80,
   *       "target_protocol": "http",
   *       "target_port": 80,
   *       "certificate_id": "",
   *       "tls_passthrough": false
   *     },
   *     {
   *       "entry_protocol": "https",
   *       "entry_port": 444,
   *       "target_protocol": "https",
   *       "target_port": 443,
   *       "tls_passthrough": true
   *     }
   *   ],
   *   "health_check": {
   *     "protocol": "http",
   *     "port": 80,
   *     "path": "/",
   *     "check_interval_seconds": 10,
   *     "response_timeout_seconds": 5,
   *     "healthy_threshold": 5,
   *     "unhealthy_threshold": 3
   *   },
   *   "sticky_sessions": {
   *     "type": "none"
   *   },
   *   "droplet_ids": [
   *     3164444,
   *     3164445
   *   ]
   * };
   *
   * const loadBalancer = await client.loadBalancers.createLoadBalancer(lb);
   * ```
   */
  public createLoadBalancer(loadBalancer: LoadBalancer): Promise<LoadBalancer> {
    return new Promise((resolve, reject) => {
      if (!this.loadBalancerIsValid(loadBalancer)) {
        throw new Error('Required fields missing from Load Balancer Object');
      }
      loadBalancer.forwarding_rules.forEach(rule => {
        if (!this.forwardingRuleIsValid(rule)) {
          throw new Error(
            'Required fields missing from Forwarding Rule Object'
          );
        }
      });
      if (loadBalancer.health_check) {
        if (!this.healthCheckIsValid(loadBalancer.health_check)) {
          throw new Error('Required fields missing from Health Check Object');
        }
      }
      axios
        .post(`/load_balancers`, loadBalancer)
        .then(response => {
          // Return actual load_balancer instead of wrapped load_balancer
          resolve(response.data.load_balancer);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get an existing Load Balancer
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const loadBalancer = await client.loadBalancers.getExistingLoadBalancer('load-balancer-id');
   * ```
   */
  public getExistingLoadBalancer(id: string): Promise<LoadBalancer> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/load_balancers/${id}`)
        .then(response => {
          // Return actual load_balancer instead of wrapped load_balancer
          resolve(response.data.load_balancer);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get all existing Load Balancers
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const loadBalancers = await client.loadBalancers.getAllLoadBalancers();
   * ```
   */
  public getAllLoadBalancers(): Promise<LoadBalancer[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/load_balancers`)
        .then(response => {
          // Return actual load_balancers instead of wrapped load_balancers
          resolve(response.data.load_balancers);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Update an existing Load Balancer
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   *
   * const lb = {
   *   "name": "example-lb-01",
   *   "region": "nyc3",
   *   "algorithm": "least_connections",
   *   "forwarding_rules": [
   *     {
   *       "entry_protocol": "http",
   *       "entry_port": 80,
   *       "target_protocol": "http",
   *       "target_port": 80
   *     },
   *     {
   *       "entry_protocol": "https",
   *       "entry_port": 444,
   *       "target_protocol": "https",
   *       "target_port": 443,
   *       "tls_passthrough": true
   *     }
   *   ],
   *   "health_check": {
   *     "protocol": "http",
   *     "port": 80,
   *     "path": "/",
   *     "check_interval_seconds": 10,
   *     "response_timeout_seconds": 5,
   *     "healthy_threshold": 5,
   *     "unhealthy_threshold": 3
   *   },
   *   "sticky_sessions": {
   *     "type": "cookies",
   *     "cookie_name": "DO_LB",
   *     "cookie_ttl_seconds": 300
   *   },
   *   "droplet_ids": [
   *     3164444,
   *     3164445
   *   ]
   * };
   *
   * const loadBalancer = await client.loadBalancers.updateLoadBalancer(lb);
   * ```
   */
  public updateLoadBalancer(loadBalancer: LoadBalancer): Promise<LoadBalancer> {
    return new Promise((resolve, reject) => {
      if (!this.loadBalancerIsValid(loadBalancer)) {
        throw new Error('Required fields missing from Load Balancer Object');
      }
      loadBalancer.forwarding_rules.forEach(rule => {
        if (!this.forwardingRuleIsValid(rule)) {
          throw new Error(
            'Required fields missing from Forwarding Rule Object'
          );
        }
      });
      if (loadBalancer.health_check) {
        if (!this.healthCheckIsValid(loadBalancer.health_check)) {
          throw new Error('Required fields missing from Health Check Object');
        }
      }
      axios
        .put(`/load_balancers/${loadBalancer.id}`, loadBalancer)
        .then(response => {
          // Return actual load_balancer instead of wrapped load_balancer
          resolve(response.data.load_balancer);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete an existing Load Balancer
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.loadBalancers.deleteLoadBalancer('load-balancer-id');
   * ```
   */
  public deleteLoadBalancer(id: string): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/load_balancers/${id}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Add droplets to a Load Balancer
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const dropletIds = [
   *   'droplet-id-1',
   *   'droplet-id-2',
   *   'droplet-id-3',
   * ];
   * await client.loadBalancers.addDropletsToLoadBalancer(dropletIds);
   * ```
   */
  public addDropletsToLoadBalancer(
    id: string,
    dropletIds: number[]
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .post(`/load_balancers/${id}`, {
          droplet_ids: dropletIds
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
   * Remove droplets from a Load Balancer
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const dropletIds = [
   *   'droplet-id-1',
   *   'droplet-id-2',
   *   'droplet-id-3',
   * ];
   * await client.loadBalancers.removeDropletsFromLoadBalancer('load-balancer-id', dropletIds);
   * ```
   */
  public removeDropletsFromLoadBalancer(
    id: string,
    dropletIds: number[]
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/load_balancers/${id}`, {
          data: { droplet_ids: dropletIds }
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
   * Add forwarding rules to an existing Load Balancer
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const rules = [
   *   {
   *     "entry_protocol": "tcp",
   *     "entry_port": 3306,
   *     "target_protocol": "tcp",
   *     "target_port": 3306
   *   }
   * ];
   * await client.loadBalancers
   *    .addForwardingRulesToLoadBalancer('load-balancer-id', rules);
   * ```
   */
  public addForwardingRulesToLoadBalancer(
    id: string,
    rules: ForwardingRule[]
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      rules.forEach(rule => {
        if (!this.forwardingRuleIsValid(rule)) {
          throw new Error(
            'Required fields missing from Forwarding Rule Object'
          );
        }
      });
      axios
        .post(`/load_balancers/${id}/forwarding_rules`, {
          forwarding_rules: rules
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
   * Remove forwarding rules from an existing Load Balancer
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const rules = [
   *   {
   *     "entry_protocol": "tcp",
   *     "entry_port": 3306,
   *     "target_protocol": "tcp",
   *     "target_port": 3306
   *   }
   * ];
   * await client.loadBalancers
   *    .removeForwardingRulesFromLoadBalancer('load-balancer-id', rules);
   * ```
   */
  public removeForwardingRulesFromLoadBalancer(
    id: string,
    rules: ForwardingRule[]
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      rules.forEach(rule => {
        if (!this.forwardingRuleIsValid(rule)) {
          throw new Error(
            'Required fields missing from Forwarding Rule Object'
          );
        }
      });
      axios
        .delete(`/load_balancers/${id}/forwarding_rules`, {
          data: { forwarding_rules: rules }
        })
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  ////////// Validation Methods //////////
  private loadBalancerIsValid(lb: LoadBalancer): boolean {
    if (
      !lb.name ||
      !lb.region ||
      !lb.forwarding_rules ||
      lb.forwarding_rules.length === 0
    ) {
      return false;
    }
    return true;
  }

  private forwardingRuleIsValid(rule: ForwardingRule): boolean {
    if (
      !rule.entry_protocol ||
      !rule.entry_port ||
      !rule.target_protocol ||
      !rule.target_port
    ) {
      return false;
    }
    return true;
  }

  private healthCheckIsValid(check: HealthCheck): boolean {
    if (!check.protocol || !check.port) {
      return false;
    }
    return true;
  }
}
