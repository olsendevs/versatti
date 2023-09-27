import { useState } from "react";
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Input } from '@/components/ui/input';


interface CustomInputProps {
    searchData: (terms: string) => void;
    placeholder: string;
}


export function SearchFilter({searchData, placeholder}: CustomInputProps) {
    const [terms, setTerms] = useState('');
    return (
        <>
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
          placeholder={placeholder}
          value={terms}
          onChange={(e) => setTerms(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              searchData(terms);
            }
          }}/>
        </>
    );
}