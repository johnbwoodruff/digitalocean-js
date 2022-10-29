export interface CdnEndpoint {
  id: string;
  origin: string;
  endpoint: string;
  created_at: string;
  ttl: number;
  certificate_id?: string;
  custom_domain?: string;
}

export interface CdnEndpointRequest {
  origin?: string;
  ttl?: number;
}
