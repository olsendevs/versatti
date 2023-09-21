import axios, { AxiosInstance } from 'axios';
export class AuthService {
  protected readonly instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: 'Time out!',
    });
  }

  login = (username: string, password: string) => {
    return this.instance
      .post('/users/login', {
        username,
        password,
      })
      .then((res: any) => {
        return {
          id: res.data.user_id,
          accessToken: res.data.access_token,
          departament: res.data.department,
        };
      })
      .catch(() => {
        return {
          id: '',
          accessToken: '',
          departament: '',
        };
      });
  };
}
