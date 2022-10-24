import { AxiosError } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { getErrorResponse, getProjects, getSingleProject } from '../../../test';
import { instance } from '../../axios-instance';
import { DigitalOcean } from '../../digitalocean';
import { RESOURCE_TYPE } from '../../models';

const mock = new MockAdapter(instance, { onNoMatch: 'throwException' });
const client = new DigitalOcean('abc123');

describe('Project Service', () => {
  describe('getAllProjects', () => {
    it('should resolve correctly', async () => {
      const projects = getProjects();
      mock.onGet('/projects').reply(200, { projects });

      const allProjects = await client.projects.getAllProjects();
      expect(allProjects).toEqual(projects);
    });

    it('should reject on failure', async () => {
      const error = getErrorResponse();
      mock.onGet('/projects').reply(400, error);

      try {
        await client.projects.getAllProjects();
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(error);
      }
    });
  });

  describe('getExistingProject', () => {
    it('should resolve correctly', async () => {
      const project = getSingleProject();
      mock.onGet(`/projects/${project.id}`).reply(200, { project });

      const singleProject = await client.projects.getExistingProject(
        project.id!
      );
      expect(singleProject).toEqual(project);
    });

    it('should reject on failure', async () => {
      const error = getErrorResponse();
      mock.onGet('/projects/bad-id').reply(400, error);

      try {
        await client.projects.getExistingProject('bad-id');
      } catch (e) {
        expect((e as AxiosError).response?.data).toEqual(error);
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
