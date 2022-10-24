import { BlockStorage } from '../../index';

export const BLOCK_STORAGE_VOLUMES: BlockStorage[] = [
  {
    id: '506f78a4-e098-11e5-ad9f-000f53306ae1',
    region: {
      name: 'New York 1',
      slug: 'nyc1',
      sizes: [],
      features: [],
      available: true
    },
    droplet_ids: [],
    name: 'example',
    description: 'Block store for examples',
    size_gigabytes: 10,
    created_at: '2016-03-02T17:00:49Z',
    filesystem_type: 'ext4',
    filesystem_label: 'example',
    tags: []
  },
  {
    id: '506f78a4-e098-11e5-ad9f-000f53305eb2',
    region: {
      name: 'New York 1',
      slug: 'nyc1',
      sizes: [],
      features: [],
      available: true
    },
    droplet_ids: [],
    name: 'example',
    description: 'Block store for examples',
    size_gigabytes: 10,
    created_at: '2016-03-02T17:01:49Z',
    filesystem_type: 'ext4',
    filesystem_label: 'example',
    tags: []
  }
];
