import { Project } from '../../index';

export const PROJECTS: Project[] = [
  {
    id: '4e1bfbc3-dc3e-41f2-a18f-1b4d7ba71679',
    owner_uuid: '99525febec065ca37b2ffe4f852fd2b2581895e7',
    owner_id: 258992,
    name: 'my-web-api',
    description: 'My website API',
    purpose: 'Service or API',
    environment: 'Production',
    is_default: false,
    created_at: '2018-09-27T20:10:35Z',
    updated_at: '2018-09-27T20:10:35Z'
  },
  {
    id: 'addb4547-6bab-419a-8542-76263a033cf6',
    owner_uuid: '99525febec065ca37b2ffe4f852fd2b2581895e7',
    owner_id: 258992,
    name: 'Default',
    description: 'Default project',
    purpose: 'Just trying out DigitalOcean',
    environment: 'Development',
    is_default: true,
    created_at: '2017-10-19T21:44:20Z',
    updated_at: '2019-11-05T18:50:03Z'
  }
];
