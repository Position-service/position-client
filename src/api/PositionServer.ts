import { AxiosInstance, AxiosResponse } from 'axios';
import { client, authenticatedClient } from './PositionAxiosInstance';
import { AccountResponse, TokenResponse } from '../types/AccountResponse';
import { SignOut } from '../enums/SignInStatus';

export default class Server {
  token: string;
  authenticatedClient: AxiosInstance;
  constructor(signOutHandler: (signInStatus: SignOut) => void, token: string) {
    this.token = token;
    this.authenticatedClient = authenticatedClient(signOutHandler, this.token);
  }

  signup = (
    email: string,
    password: string,
    password_check: string,
    nickName: string
  ): Promise<AxiosResponse<AccountResponse>> => {
    return client.post('/api/users/', {
      email,
      password,
      password_check,
      nickName,
    });
  };

  login = (
    email: string,
    password: string
  ): Promise<AxiosResponse<TokenResponse>> => {
    return client.post('/api/users/signin', { email, password });
  };

  verifyToken = (token: string): Promise<AxiosResponse<TokenResponse>> => {
    return client.post('/api/users/verify-token', { token });
  };

  refreshToken = (token: string): Promise<AxiosResponse<TokenResponse>> => {
    return client.post('/api/users/refresh-token', { token });
  };

  confirmEmail = (key: string): Promise<AxiosResponse<TokenResponse>> => {
    return client.get(`/api/users/confirmEmail?key=${key}`);
  };
}
