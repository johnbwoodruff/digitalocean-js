export interface KubernetesCluster {
  id: string;
  name: string;
  endpoint: string;
  region: string;
  version: string;
  auto_upgrade: boolean;
  ipv4: string;
  cluster_subnet: string;
  service_subnet: string;
  tags: string[];
  maintenance_policy: KubernetesClusterMaintenancePolicy;
  node_pools: KubernetesWorkerNodePool[];
  created_at: string;
  updated_at: string;
  status: KubernetesClusterState;
}

export interface KubernetesClusterMaintenancePolicy {
  start_time: string;
  duration?: string;
  day: string;
}

export interface KubernetesWorkerNodePool {
  id?: string;
  size: string;
  name: string;
  count: number;
  tags?: string[];
  auto_scale?: boolean;
  nodes?: KubernetesWorkerNode;
  min_nodes?: string;
  max_nodes?: string;
}

export interface KubernetesWorkerNode {
  id?: string;
  name: string;
  status?: KubernetesClusterState;
  created_at?: string;
  updated_at?: string;
}

export interface KubernetesClusterState {
  state: 'running' | 'provisioning' | 'errored';
}

export interface KubernetesClusterRequest {
  name: string;
  region: string;
  version: string;
  auto_upgrade?: boolean;
  tags?: string[];
  maintenance_policy?: KubernetesClusterMaintenancePolicy;
  node_pools: KubernetesWorkerNodePool;
}

export interface KubernetesVersion {
  slug: string;
  kubernetes_version: string;
}

export interface KubernetesRegion {
  name: string;
  slug: string;
}

export interface KubernetesSize {
  name: string;
  slug: string;
}

export interface KubernetesOptions {
  regions: KubernetesRegion[];
  versions: KubernetesVersion[];
  sizes: KubernetesSize[];
}
