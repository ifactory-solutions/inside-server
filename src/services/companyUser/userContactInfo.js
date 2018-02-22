import * as SimpleCrud from '../simpleCrudService';
import { UserContactInfo } from '../../db/models';

const { getFilter } = SimpleCrud;

export const createContactInfo = async account => SimpleCrud.create(UserContactInfo, account);
export const findContactInfo = async id => SimpleCrud.findOne(UserContactInfo, getFilter('id', id));
export const updateContactInfo = async (id, account) =>
  SimpleCrud.update(UserContactInfo, getFilter('id', id), account);
export const removeContactInfo = async id => SimpleCrud.remove(UserContactInfo, getFilter('id', id));
