export interface TaskProperty {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  disabled: boolean;
}

export interface TasksPropertyGroup extends Array<TaskProperty> {}

export interface TaskData {
  id: number;
  isDone: string;
  date: string;
}
