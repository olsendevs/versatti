import { authService } from '../../services';
import Cookies from 'js-cookie';
import { AuthUser } from '../../types/auth-user';

export const useLogin = () => {
  const login = async (email: string, password: string) => {
    const user = await authService.login(email, password);
    if (user.accessToken != '') {
      Cookies.set('currentUser', JSON.stringify(user));
      localStorage.setItem(
        'token',
        JSON.stringify(user.accessToken),
      );
    }
    return user as AuthUser;
  };

  return { login };
};
