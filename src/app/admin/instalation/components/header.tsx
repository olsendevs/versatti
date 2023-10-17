import { Button } from '@/components/ui/button';
import Tabs from './tabs';
import Link from 'next/link';
import { SearchFilter } from '@/components/ui/search-filter';

export default function Header({ searchData }: any) {
  return (
    <div className="bg-white w-[98%] p-4 rad rounded-xl flex items-center space-x-2">
      <div className="flex items-center">
        <SearchFilter searchData={searchData} placeholder="Buscar ordem de serviço ..."/>
        <Link
          href="/admin/service-order/create"
          legacyBehavior
          passHref
        >
          <Button
            className="bg-[#02AE13] w-[100px] font-thin p-1 hover:bg-green-600 ml-3"
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
