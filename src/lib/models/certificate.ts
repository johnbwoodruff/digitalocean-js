export interface Certificate {
  id: string;
  name: string;
  not_after: string;
  sha1_fingerprint: string;
  created_at: string;
}

export interface CertificateRequest {
  name: string;
  private_key: string;
  leaf_certificate: string;
  certificate_chain?: string;
}
