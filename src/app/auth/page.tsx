'use client';

import { useRouter } from 'next/navigation';
import Logo from './components/logo';
import AuthCard from './components/auth-card';

export default function AuthPage() {
  const router = useRouter();

  return (
    <div className="ml-auto mr-auto mt-[6vw] flex flex-col items-center">
      <Logo />
      <AuthCard />
    </div>
  );
}
