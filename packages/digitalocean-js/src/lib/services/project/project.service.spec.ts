import { AxiosError } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { MOCK_ERROR } from '../../../test/shared';
import { instance } from '../../axios-instance';

import { DigitalOcean } from '../../digitalocean';
import { Project, RESOURCE_TYPE } from '../../models/project';

const DUMMY_PROJECT: Project = {
  id: 'abc123'
};
const DUMMY_PROJECTS: Project[] = [DUMMY_PROJECT];

const mock = new MockAdapter(instance, { onNoMatch: 'throwException' });
const client = new DigitalOcean('abc123');

describe('Project Service', () => {
  describe('getAllProjects', () => {
    it('should resolve correctly', async () => {
      mock.onGet('/projects').reply(200, { projects: DUMMY_PROJECTS });

      const projects = await client.projects.getAllProjects();
      expect(projects).toEqual(DUMMY_PROJECTS);
    });

    it('should reject on failure', async () => {
      mock.onGet('/projects').reply(400, MOCK_ERROR);

      try {
        await client.projects.getAllProjects();
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(MOCK_ERROR);
      }
    });
  });

  describe('getExistingProject', () => {
    it('should resolve correctly', async () => {
      mock
        .onGet(`/projects/${DUMMY_PROJECT.id}`)
        .reply(200, { project: DUMMY_PROJECT });

      const project = await client.projects.getExistingProject(
        DUMMY_PROJECT.id!
      );
      expect(project).toEqual(DUMMY_PROJECT);
    });

    it('should reject on failure', async () => {
      mock.onGet('/projects/bad-id').reply(400, MOCK_ERROR);

      try {
        await client.projects.getExistingProject('bad-id');
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(MOCK_ERROR);
      }
    });
  });

  describe('parseProjectResourceUrn', () => {
    it('should successfully parse valid urn', () => {
      expect(
        client.projects.parseProjectResourceUrn('do:droplet:123456')
      ).toEqual({
        id: '123456',
        type: RESOURCE_TYPE.DROPLET
      });
    });

    it('should throw error on bad urn', () => {
      expect(() =>
        client.projects.parseProjectResourceUrn('this-is-not-a-urn')
      ).toThrowError(
        `URN expected in the format of 'do:resource_type:resource_id'`
      );
    });
  });
});
