import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { useLogin } from '@/hooks/auth/useLogin';
import { Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

export default function AuthCard() {
  const { login } = useLogin();
  const { toast } = useToast();
  const [loginInputs, setLoginInputs] = useState({
    username: '',
    password: '',
  });
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    setUsernameError(false);
    setPasswordError(false);

    if (loginInputs.username === '') {
      setUsernameError(true);
    }
    if (loginInputs.password === '') {
      setPasswordError(true);
    }

    if (
      loginInputs.username !== '' &&
      loginInputs.password !== ''
    ) {
      const user = await login(
        loginInputs.username,
        loginInputs.password,
      );
      if (user.accessToken == '') {
        toast({
          description: 'Dados invalidos, tente novamente.',
          variant: 'destructive',
        });
      } else {
        router.push('/admin/service-order');
      }
    }
  };

  return (
    <div
      style={{ borderRadius: '12px' }}
      className="block w-[600px] h-[350px] bg-white p-16"
    >
      <div className="mb-9">
        <Input
          className={`rounded-lg border border-blue-100 
        bg-white shadow-md py-6 ${
          usernameError ? 'border-red-500' : ''
        }`}
          type="text"
          placeholder="Usuário"
          value={loginInputs.username}
          onChange={(e) => {
            setLoginInputs({
              username: e.target.value,
              password: loginInputs.password,
            });
            setUsernameError(false);
          }}
        />
        {usernameError && (
          <Typography className="absolute text-red-500 text-sm">
            Por favor, preencha o campo de usuário.
          </Typography>
        )}
      </div>
      <div className="mb-5">
        <Input
          className={`rounded-lg border border-blue-100 
        bg-white shadow-md py-6 ${
          passwordError ? 'border-red-500' : ''
        }`}
          type="password"
          placeholder="Senha"
          value={loginInputs.password}
          onChange={(e) => {
            setLoginInputs({
              username: loginInputs.username,
              password: e.target.value,
            });
            setPasswordError(false);
          }}
        />
        {passwordError && (
          <Typography className="absolute text-red-500 text-sm">
            Por favor, preencha o campo de senha.
          </Typography>
        )}
      </div>
      <Button
        className="bg-[#02AE13] hover:bg-green-500 mt-5 w-full text-lg py-6"
        onClick={handleLogin}
      >
        Acessar
      </Button>
      <Toaster />
    </div>
  );
}
