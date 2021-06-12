import { Dispatch, SetStateAction } from 'react';

export interface TaskResponse {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  disabled: boolean;
}

export type TasksPropertyGroup = TaskResponse[];

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

export type AchievementsPropertyGroup = AchievementsResponse[];

export interface AchievementsResponse {
  isDone: string;
  type: string;
  name: string;
  date: string;
  id: number;
  color: string;
}

export type TasksForEditing = EditingTask[];

export interface EditingTask {
  id: number;
  type: string;
  name: string;
  dateTo: Date;
  imgUrl: string;
  measure: string;
  quantity: number;
  description: string;
  increment?: number;
  speed?: number;
}
