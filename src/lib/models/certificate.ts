export type CertificateType = 'custom' | 'lets_encrypt';

export interface Certificate {
  id: string;
  name: string;
  not_after: string;
  sha1_fingerprint: string;
  created_at: string;
  dns_names: string[];
  state: string;
  type: CertificateType;
}

export interface CertificateRequest {
  name: string;
  private_key: string;
  leaf_certificate: string;
  certificate_chain?: string;
  dns_names: string[];
  type: CertificateType;
}
