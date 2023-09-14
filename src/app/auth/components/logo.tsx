import { Typography } from '@mui/material';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center mb-9">
      <Image
        src="/versatti-logo-branco.png"
        width={220}
        height={100}
        alt="Versatti logo"
      />
      <Typography
        className="text-white font-thin"
        fontSize={60}
      >
        VERSATTI
      </Typography>
    </div>
  );
}
