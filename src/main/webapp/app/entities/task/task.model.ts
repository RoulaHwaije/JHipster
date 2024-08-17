import dayjs from 'dayjs/esm';

export interface ITask {
  id: number;
  title?: string | null;
  description?: string | null;
  dueDate?: dayjs.Dayjs | null;
  completed?: boolean | null;
}

export type NewTask = Omit<ITask, 'id'> & { id: null };
