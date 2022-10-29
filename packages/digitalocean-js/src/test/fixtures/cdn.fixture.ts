import { CdnEndpoint } from '../../index';

export const CDN_ENDPOINTS: CdnEndpoint[] = [
  {
    id: '19f06b6a-3ace-4315-b086-499a0e521b76',
    origin: 'static-images.nyc3.digitaloceanspaces.com',
    endpoint: 'static-images.nyc3.cdn.digitaloceanspaces.com',
    created_at: '2018-07-19T15:04:16Z',
    certificate_id: '892071a0-bb95-49bc-8021-3afd67a210bf',
    custom_domain: 'static.example.com',
    ttl: 3600
  },
  {
    id: 'a84dd587-17e7-4124-86bd-cbcf433042a2',
    origin: 'static-images.nyc3.digitaloceanspaces.com',
    endpoint: 'static-images.nyc3.cdn.digitaloceanspaces.com',
    created_at: '2018-07-19T15:04:16Z',
    certificate_id: '892071a0-bb95-49bc-8021-3afd67a210bf',
    custom_domain: 'static.example.com',
    ttl: 3600
  }
];
