export interface Domain {
  name: string;
  ttl: number;
  zone_file: string;
}

export interface DomainRequest {
  name: string;
  ip_address: string;
}
