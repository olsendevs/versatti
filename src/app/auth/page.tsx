'use client';

import Logo from './components/logo';
import AuthCard from './components/auth-card';

export default function AuthPage() {
  return (
    <div className="ml-auto mr-auto mt-[6vw] flex flex-col items-center">
      <Logo />
      <AuthCard />
    </div>
  );
}
