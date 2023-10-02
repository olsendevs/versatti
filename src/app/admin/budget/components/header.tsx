import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SearchFilter } from '@/components/ui/search-filter';

export default function Header({ searchData }: any) {
  return (
    <div className="bg-white w-[98%] p-4 rad rounded-xl flex items-center space-x-2 shadow-md">
      <div className="flex items-center">
        <SearchFilter
          searchData={searchData}
          placeholder="Buscar orçamento ..."
        />
        <Link
          href="/admin/budget/create"
          legacyBehavior
          passHref
        >
          <Button
            className="bg-[#02AE13] w-[150px] font-thin p-1 hover:bg-green-600 ml-3"
            type="submit"
          >
            Criar orçamento
          </Button>
        </Link>
      </div>
    </div>
  );
}
