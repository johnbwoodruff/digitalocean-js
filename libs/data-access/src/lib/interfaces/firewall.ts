export interface Firewall {
  id?: string;
  status?: string;
  created_at?: string;
  pending_changes?: FirewallChange[];
  name: string;
  inbound_rules: FirewallInboundRule[];
  outbound_rules: FirewallOutboundRule[];
  droplet_ids: number[];
  tags: string[];
}

export interface FirewallChange {
  droplet_id: string;
  removing: string;
  status: string;
}

export interface FirewallInboundRule {
  protocol: string;
  ports: string;
  sources: FirewallSourceDestination;
}

export interface FirewallOutboundRule {
  protocol: string;
  ports: string;
  destinations: FirewallSourceDestination;
}

export interface FirewallSourceDestination {
  addresses: string[];
  droplet_ids: number[];
  load_balancer_uids: string[];
  tags: string[];
}
