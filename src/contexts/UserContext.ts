import { createContext } from 'react';
import { UserDataResponse } from '../types/AccountResponse';

type UserContextType = {
  user: UserDataResponse;
};

const UserContext = createContext<UserContextType>({
  user: {} as UserDataResponse,
});

export default UserContext;
