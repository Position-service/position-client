import axios from 'axios';
import SignInStatus, { SignOut } from '../enums/SignInStatus';

const baseURL = process.env.REACT_APP_API_URL;

export const authenticatedClient = (
  autoSignOutHandler: (signInStatus: SignOut) => void,
  token: string
) => {
  const axiosInstance = axios.create({
    baseURL,
    headers: { authorization: token },
  });

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (e) => {
      if (e.response.status === 401) {
        autoSignOutHandler(SignInStatus.EXPIRED);
      } else if (e.response.status === 500) {
        alert('서버 오류입니다. 관리자에게 문의해주세요.');
      }
      return Promise.reject(e);
    }
  );
  return axiosInstance;
};

export const client = axios.create({
  baseURL,
});
