import * as SimpleCrud from '../simpleCrudService';
import { UserDocuments } from '../../db/models';

const { getFilter } = SimpleCrud;

export const createDocuments = async account => SimpleCrud.create(UserDocuments, account);
export const findDocuments = async id => SimpleCrud.findOne(UserDocuments, getFilter('id', id));
export const updateDocuments = async (id, account) => SimpleCrud.update(UserDocuments, getFilter('id', id), account);
export const removeDocuments = async id => SimpleCrud.remove(UserDocuments, getFilter('id', id));
