import { axios } from '../axios-instance';

import {
  KubernetesCluster,
  KubernetesClusterRequest,
  KubernetesOptions,
  KubernetesVersion,
  KubernetesWorkerNodePool
} from '../models/kubernetes-cluster';

export class KubernetesService {
  constructor() {}

  /**
   * Create a new kubernetes cluster
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   "name": "prod-cluster-01",
   *   "region": "nyc1",
   *   "version": "1.14.1-do.4",
   *   "tags": [
   *     "production",
   *     "web-team"
   *   ],
   *   "node_pools": [
   *     {
   *       "size": "s-1vcpu-2gb",
   *       "count": 3,
   *       "name": "frontend-pool",
   *       "tags": [
   *         "frontend"
   *       ]
   *     },
   *     {
   *       "size": "c-4",
   *       "count": 2,
   *       "name": "backend-pool"
   *     }
   *   ]
   * };
   * const cluster = await client.kubernetes.createCluster(request);
   * ```
   */
  public createCluster(
    cluster: KubernetesClusterRequest
  ): Promise<KubernetesCluster> {
    return new Promise((resolve, reject) => {
      axios
        .post(`/kubernetes/clusters`, cluster)
        .then(response => {
          // Return actual cluster instead of wrapped cluster
          resolve(response.data.kubernetes_cluster);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get a specific existing kubernetes cluster by ID
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const cluster = await client.kubernetes.getCluster('cluster-id');
   * ```
   */
  public getCluster(clusterId: string): Promise<KubernetesCluster> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/kubernetes/clusters/${clusterId}`)
        .then(response => {
          // Return actual cluster instead of wrapped cluster
          resolve(response.data.kubernetes_cluster);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get all existing kubernetes clusters
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const clusters = await client.kubernetes.getAllClusters();
   * ```
   */
  public getAllClusters(): Promise<KubernetesCluster[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/kubernetes/clusters`)
        .then(response => {
          // Return actual cluster instead of wrapped cluster
          resolve(response.data.kubernetes_clusters);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Update an existing kubernetes cluster
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   "name": "stage-cluster-01",
   *   "tags": [
   *     "staging",
   *     "web-team"
   *   ]
   * };
   * const cluster = await client.kubernetes.updateCluster('cluster-id', request);
   * ```
   */
  public updateCluster(
    clusterId: string,
    cluster: KubernetesCluster
  ): Promise<KubernetesCluster> {
    return new Promise((resolve, reject) => {
      axios
        .put(`/kubernetes/clusters/${clusterId}`, cluster)
        .then(response => {
          // Return actual cluster instead of wrapped cluster
          resolve(response.data.kubernetes_cluster);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get available upgrades for an existing kubernetes cluster
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const upgrades = await client.kubernetes.getAvailableUpgradesForCluster('cluster-id');
   * ```
   */
  public getAvailableUpgradesForCluster(
    clusterId: string
  ): Promise<KubernetesVersion[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/kubernetes/clusters/${clusterId}/upgrades`)
        .then(response => {
          // Return actual versions instead of wrapped versions
          resolve(response.data.available_upgrade_versions);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Upgrade the version of an existing kubernetes cluster
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.kubernetes.upgradeExistingCluster('cluster-id', "1.12.3-do.1");
   * ```
   */
  public upgradeExistingCluster(
    clusterId: string,
    version: string
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .post(`/kubernetes/clusters/${clusterId}/upgrade`, {
          version
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
   * Delete an existing kubernetes cluster
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.kubernetes.deleteCluster('cluster-id');
   * ```
   */
  public deleteCluster(clusterId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/kubernetes/clusters/${clusterId}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get the contents of the kubeconfig yaml file for use with a Kubernetes cluster
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const kubeconfig = await client.kubernetes.getClusterKubeconfig('cluster-id');
   * ```
   */
  public getClusterKubeconfig(clusterId: string): Promise<string> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/kubernetes/clusters/${clusterId}/kubeconfig`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get an existing node pool on a kubernetes cluster
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const nodePool = await client.kubernetes.getExistingNodePoolForCluster('cluster-id', 'pool-id');
   * ```
   */
  public getExistingNodePoolForCluster(
    clusterId: string,
    poolId: string
  ): Promise<KubernetesWorkerNodePool> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/kubernetes/clusters/${clusterId}/node_pools/${poolId}`)
        .then(response => {
          resolve(response.data.node_pool);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get all existing node pools on a kubernetes cluster
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const nodePools = await client.kubernetes.getAllNodePoolsForCluster('cluster-id');
   * ```
   */
  public getAllNodePoolsForCluster(
    clusterId: string
  ): Promise<KubernetesWorkerNodePool[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/kubernetes/clusters/${clusterId}/node_pools`)
        .then(response => {
          resolve(response.data.node_pools);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Add a node pool to a kubernetes cluster
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   "size": "s-2vcpu-4gb",
   *   "count": 1,
   *   "name": "pool-02",
   *   "tags": [
   *     "web"
   *   ]
   * };
   * const nodePool = await client.kubernetes.addNodePoolToCluster('cluster-id', request);
   * ```
   */
  public addNodePoolToCluster(
    clusterId: string,
    nodePool: KubernetesWorkerNodePool
  ): Promise<KubernetesWorkerNodePool> {
    return new Promise((resolve, reject) => {
      axios
        .post(`/kubernetes/clusters/${clusterId}/node_pools`, nodePool)
        .then(response => {
          resolve(response.data.node_pool);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Update an existing node pool in a kubernetes cluster
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const request = {
   *   "name": "frontend",
   *   "count": 1,
   *   "tags": [
   *     "frontend"
   *   ]
   * };
   * const nodePool = await client.kubernetes.updateNodePoolForCluster('cluster-id', 'pool-id', request);
   * ```
   */
  public updateNodePoolForCluster(
    clusterId: string,
    nodePoolId: string,
    nodePool: KubernetesWorkerNodePool
  ): Promise<KubernetesWorkerNodePool> {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `/kubernetes/clusters/${clusterId}/node_pools/${nodePoolId}`,
          nodePool
        )
        .then(response => {
          resolve(response.data.node_pool);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete an existing node pool from a kubernetes cluster
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.kubernetes.deleteNodePoolFromCluster('cluster-id', 'pool-id');
   * ```
   */
  public deleteNodePoolFromCluster(
    clusterId: string,
    nodePoolId: string
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/kubernetes/clusters/${clusterId}/node_pools/${nodePoolId}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Delete an existing node from a node pool in a kubernetes cluster.
   * Optionally specify to skip node draining or to replace with a new node after deletion.
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * await client.kubernetes.deleteNodeFromNodePoolForCluster('cluster-id', 'pool-id', 'node-id', false, false);
   * ```
   */
  public deleteNodeFromNodePoolForCluster(
    clusterId: string,
    nodePoolId: string,
    nodeId: string,
    skipDrain?: boolean,
    replace?: boolean
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const url = `/kubernetes/clusters/${clusterId}/node_pools/${nodePoolId}/nodes/${nodeId}?skip_drain=${
        skipDrain ? 1 : 0
        }&replace=${replace ? 1 : 0}`;
      axios
        .delete(url)
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   * Get available Kubernetes versions, regions that support Kubernetes, and the available node sizes.
   *
   * ### Example
   * ```js
   * import { DigitalOcean } from 'digitalocean-js';
   *
   * const client = new DigitalOcean('your-api-key');
   * const options = await client.kubernetes.getKubernetesOptions();
   * ```
   */
  public getKubernetesOptions(): Promise<KubernetesOptions> {
    return new Promise((resolve, reject) => {
      axios
        .get(`/kubernetes/options`)
        .then(response => {
          resolve(response.data.options);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
