import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'aa164b0c-3adf-4ec2-8a70-0f96bcedad0b',
};

export const sampleWithPartialData: IAuthority = {
  name: '898fa3f1-36e7-4560-b3e7-19f28bc56ae1',
};

export const sampleWithFullData: IAuthority = {
  name: '24306af1-6b3e-4580-8191-c64d6e6ec459',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
