import { Schedule } from './Schedule';
import { TaskGroup } from './Task';

export type AccountResponse = {
  id: string;
  email: string;
  password: string;
};

export type TokenResponse = {
  token: string;
};

export type UserDataResponse = {
  emailAuth: boolean;
  id: number;
  email: string;
  nickName: string;
  groups: TaskGroup[];
  schedules: Schedule[];
};

export type SignInResponse = {
  token: string;
  data: UserDataResponse;
};
