import { Dispatch, SetStateAction } from 'react';

export interface TaskResponse {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  disabled: boolean;
}

export interface TasksPropertyGroup extends Array<TaskResponse> {}

export interface TaskData {
  id: number;
  isDone: string;
  currentDate: string;
  value?: number;
}

export type ProgressFormProps = {
  id: number;
  index: number;
  marks: Marks;
  currentDate: string;
  isFormOpen: boolean;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
};

type Marks = {
  marksArray: Mark[];
  min: number;
  max: number;
  defaultValue: number;
  description: string;
  isDone: string;
};

type Mark = {
  value: number;
  label: string;
};
