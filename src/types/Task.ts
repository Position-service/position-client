export type TaskItem = {
  id: number;
  title: string;
  isDone: boolean;
};

export type TaskGroup = {
  id: number;
  title: string;
  itemList: TaskItem[];
};
