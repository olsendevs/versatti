import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Tabs() {
  return (
    <div className="ml-auto">
      <Link href="/admin/service-order" passHref>
        <Button
          className="text-white bg-[#FF8800] 
        rounded-r-none 
        hover:bg-[#FF8800] hover:text-white"
        >
          Ordem
        </Button>
      </Link>
      <Link href="/admin/sector" passHref>
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
      <Link href="/admin/instalation" passHref>
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
