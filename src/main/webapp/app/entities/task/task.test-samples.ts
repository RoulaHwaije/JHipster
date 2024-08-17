import dayjs from 'dayjs/esm';

import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 2055,
  title: 'whenever watery',
};

export const sampleWithPartialData: ITask = {
  id: 25373,
  title: 'nondisclosure when',
  dueDate: dayjs('2024-08-17'),
  completed: false,
};

export const sampleWithFullData: ITask = {
  id: 27046,
  title: 'if supposing meaningfully',
  description: 'fooey swiftly compartmentalize',
  dueDate: dayjs('2024-08-17'),
  completed: false,
};

export const sampleWithNewData: NewTask = {
  title: 'boo',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
