import { Region } from './region';

export interface LoadBalancer {
  id: string;
  name: string;
  ip: string;
  algorithm: 'round_robin' | 'least_connections';
  status: 'new' | 'active' | 'errored';
  created_at: string;
  forwarding_rules: ForwardingRule[];
  health_check: HealthCheck;
  sticky_sessions: StickySession;
  region: string | Region;
  tag: string;
  droplet_ids: number[];
  redirect_http_to_https: boolean;
}

export interface ForwardingRule {
  entry_protocol: 'http' | 'https' | 'http2' | 'tcp';
  entry_port: number;
  target_protocol: 'http' | 'https' | 'http2' | 'tcp';
  target_port: number;
  certificate_id: string;
  tls_passthrough: boolean;
}

export interface HealthCheck {
  protocol: 'http' | 'tcp';
  port: number;
  path: string;
  check_interval_seconds: number;
  response_timeout_seconds: number;
  unhealthy_threshold: number;
  healthy_threshold: number;
}

export interface StickySession {
  type: 'cookies' | 'none';
  cookie_name: string;
  cookie_ttl_seconds: string;
}
