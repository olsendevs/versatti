import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import Tabs from './tabs';
import Link from 'next/link';
import { useState } from 'react';

export default function Filters({ searchData }: any) {
  const [terms, setTerms] = useState('');
  return (
    <div className="bg-white w-[98%] p-4 rad rounded-xl flex items-center space-x-2">
      <div className="flex items-center">
        <div 
          className="cursor-pointer bg-orange-500 rounded-tl-lg rounded-bl-lg border h-10 w-10 border-orange-500" 
          onClick={() => {
              searchData(terms);
            }}
        >
          <MagnifyingGlassIcon
            className="cursor-pointer 
            block ml-2 mt-2 h-6 w-6 text-[#ffffff]"
          />
        </div>
        <Input
          className="w-[35vw] rounded-tr-lg rounded-br-lg border border-orange-500 bg-white pl-4 text-xs"
          type="text"
          placeholder="Buscar setor ..."
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              searchData(terms);
            }
          }}
        />
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
