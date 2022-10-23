export interface SshKey {
  id?: number;
  fingerprint?: string;
  public_key: string;
  name: string;
}
