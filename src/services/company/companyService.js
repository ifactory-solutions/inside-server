import { Company } from '../../db/models';

export const getCompanies = async () => Company.findAll();
