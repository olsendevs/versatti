import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Tabs from './tabs';
import Link from 'next/link';

export default function Filters() {
  return (
    <div className="bg-white w-[98%] p-4 rad rounded-xl flex items-center space-x-2">
      <div className="flex items-center space-x-2">
        <div className="">
          <MagnifyingGlassIcon
            className="cursor-pointer 
            block ml-1 h-6 w-6 text-[#FF8800]"
            onClick={() => {}}
          />
        </div>
        <Input
          className="w-[300px] rounded-lg border border-blue-100 
        bg-white shadow-md pl-4 text-xs"
          type="text"
          placeholder="Buscar ordem de serviço..."
        />
        <Link
          href="/admin/service-order/create"
          legacyBehavior
          passHref
        >
          <Button
            className="bg-[#02AE13] w-full font-thin p-1 hover:bg-green-600"
            type="submit"
          >
            Criar ordem
          </Button>
        </Link>
      </div>
      <div className="w-full flex">
        <Tabs />
      </div>
    </div>
  );
}
