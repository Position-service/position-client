export type Schedule = {
  id: number;
  title: string;
  content: string;
  dateToStart: Date;
  dateToEnd: Date;
  tagColor: string;
  isAllDay: boolean;
  isPublic: boolean;
  users: Participant[];
};

type Participant = {
  id: number;
  nickname: string;
  email: string;
};
