import { Project, Technology } from '../../db/models';

export const all = async () =>
  Project.findAll({
    include: [{ model: Technology, as: 'technologies' }],
  });

export const createProject = async (companyId, project, clientId) => {
  const projectInserted = {
    ClientId: clientId,
    project,
  };

  return Project.create(projectInserted);
};
