export interface CdnEndpoint {
  id: string;
  origin: string;
  endpoint: string;
  created_at: string;
  ttl: number;
}

export interface CdnEndpointRequest {
  origin?: string;
  ttl?: number;
}
