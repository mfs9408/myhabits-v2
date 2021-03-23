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

export interface AchievementsPropertyGroup
  extends Array<AchievementsResponse> {}

export interface AchievementsResponse {
  isDone: string;
  type: string;
  name: string;
  date: string;
  id: number;
  color: string;
}

export interface NewTaskType {
  name: string;
  description: string;
  measure: string;
  quantity: string;
  dateTo: Date;
  increment?: string;
  speed?: string;
}
