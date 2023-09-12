import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Typography } from '@mui/material';
import Image from 'next/image';

export default function AuthCard() {
  return (
    <div
      style={{ borderRadius: '12px' }}
      className="block w-[600px] h-[350px] bg-white p-16"
    >
      <Input
        className="rounded-lg border border-blue-100 
        bg-white shadow-md mb-9 py-6"
        type="text"
        placeholder="Usuário"
      />
      <Input
        className="rounded-lg border border-blue-100 
        bg-white shadow-md mb-5 py-6"
        type="password"
        placeholder="Senha"
      />
      <Button
        className="bg-[#02AE13] mt-5 w-full text-lg py-6"
        onClick={() => {}}
      >
        Acessar
      </Button>
    </div>
  );
}
