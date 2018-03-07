import { Project, Technology } from '../../db/models';

export const all = async () =>
  Project.findAll({
    include: [{ model: Technology, as: 'technologies' }],
  });
