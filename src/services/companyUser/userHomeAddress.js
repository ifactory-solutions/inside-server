import * as SimpleCrud from '../simpleCrudService';
import { UserHomeAddress } from '../../db/models';

const { getFilter } = SimpleCrud;

export const createHomeAddress = async account => SimpleCrud.create(UserHomeAddress, account);
export const findHomeAddress = async id => SimpleCrud.findOne(UserHomeAddress, getFilter('id', id));
export const updateHomeAddress = async (id, account) =>
  SimpleCrud.update(UserHomeAddress, getFilter('id', id), account);
export const removeHomeAddress = async id => SimpleCrud.remove(UserHomeAddress, getFilter('id', id));
