import * as SimpleCrud from '../simpleCrudService';
import { UserPersonalInfo } from '../../db/models';

const { getFilter } = SimpleCrud;

export const createPersonalInfo = async account => SimpleCrud.create(UserPersonalInfo, account);
export const findPersonalInfo = async id => SimpleCrud.findOne(UserPersonalInfo, getFilter('id', id));
export const updatePersonalInfo = async (id, account) =>
  SimpleCrud.update(UserPersonalInfo, getFilter('id', id), account);
export const removePersonalInfo = async id => SimpleCrud.remove(UserPersonalInfo, getFilter('id', id));
