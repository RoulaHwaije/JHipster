import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 30290,
  login: 'h1@Ckyu\\qAsedW\\FT5eheC\\Aa3M\\ yE',
};

export const sampleWithPartialData: IUser = {
  id: 28142,
  login: 'a',
};

export const sampleWithFullData: IUser = {
  id: 32659,
  login: 'VZL@hvwZa\\~tULPoM',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
