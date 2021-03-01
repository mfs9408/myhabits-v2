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
  date: string;
  value?: number;
}
