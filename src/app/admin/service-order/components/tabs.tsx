import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Tabs() {
  return (
    <div className="ml-auto">
      <Link
        href="/admin/service-order"
        legacyBehavior
        passHref
      >
        <Button
          className="text-white bg-[#FF8800] 
        rounded-r-none 
        hover:bg-[#FF8800] hover:text-white"
        >
          Ordem
        </Button>
      </Link>
      <Link href="/admin/sector" legacyBehavior passHref>
        <Button
          className="bg-[#F3F6FE] text-black 
        border border-gray-300 rounded-none 
        hover:bg-[#FF8800] hover:text-white
        hover:border hover:border-gray-300"
          onClick={() => {}}
        >
          Setor
        </Button>
      </Link>
      <Link
        href="/admin/instalation"
        legacyBehavior
        passHref
      >
        <Button
          className="bg-[#F3F6FE] text-black 
        border border-gray-300 rounded-l-none
        hover:bg-[#FF8800] hover:text-white"
        >
          Instalação
        </Button>
      </Link>
    </div>
  );
}
