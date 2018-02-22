import * as SimpleCrud from '../simpleCrudService';
import { UserBankAccount } from '../../db/models';

const { getFilter } = SimpleCrud;

export const createBankAccount = async account => SimpleCrud.create(UserBankAccount, account);
export const findBankAccount = async id => SimpleCrud.findOne(UserBankAccount, getFilter('id', id));
export const updateBankAccount = async (id, account) =>
  SimpleCrud.update(UserBankAccount, getFilter('id', id), account);
export const removeBankAccount = async id => SimpleCrud.remove(UserBankAccount, getFilter('id', id));
