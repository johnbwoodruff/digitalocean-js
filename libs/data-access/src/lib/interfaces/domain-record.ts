export interface DomainRecord {
  id: number;
  type: string;
  name: string;
  data: string;
  prority?: number | null;
  port?: number | null;
  ttl: number;
  weight: number | null;
}

export type DomainRecordTypes =
  | 'A'
  | 'AAAA'
  | 'CNAME'
  | 'MX'
  | 'TXT'
  | 'NS'
  | 'SRV';

export interface DomainRecordRequest {
  id?: number;
  type?: DomainRecordTypes;
  name?: string;
  data?: string;
  priority?: number | null;
  port?: number | null;
  ttl?: number;
  weight?: number | null;
}
