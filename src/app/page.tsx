'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function IndexPage() {
  const router = useRouter();
  useEffect(() => {
    router.push('/admin/service-order');
  }, []);

  return <></>;
}
