import Image from 'next/image';
import { useState } from 'react';

export default function TableFilters() {
  const [selected, setSelected] = useState('serralheiro');
  const handleFilter = (item: any) => {
    setSelected(item);
  };

  return (
    <div className="flex space-x-2">
      <div
        className={
          selected == 'serralheiro'
            ? `w-[35px] p-1 border 
          border-4 rounded border-green-500`
            : `w-[35px] p-1 border 
            border-4 rounded border-orange-500 cursor-pointer`
        }
        onClick={() => {
          handleFilter('serralheiro');
        }}
      >
        <Image
          src="/serralheiro-icone.png"
          alt="icon"
          width={20}
          height={20}
        />
      </div>
      <div
        className={
          selected == 'impressao'
            ? `w-[35px] p-1 border 
          border-4 rounded border-green-500`
            : `w-[35px] p-1 border 
            border-4 rounded border-orange-500 cursor-pointer`
        }
        onClick={() => {
          handleFilter('impressao');
        }}
      >
        <Image
          src="/impressao-icone.png"
          alt="icon"
          width={20}
          height={20}
        />
      </div>
      <div
        className={
          selected == 'tinturaria'
            ? `w-[35px] p-1 border 
          border-4 rounded border-green-500`
            : `w-[35px] p-1 border 
            border-4 rounded border-orange-500 cursor-pointer`
        }
        onClick={() => {
          handleFilter('tinturaria');
        }}
      >
        <Image
          src="/tinturaria-icone.png"
          alt="icon"
          width={20}
          height={20}
        />
      </div>
      <div
        className={
          selected == 'eletricista'
            ? `w-[35px] p-1 border 
          border-4 rounded border-green-500`
            : `w-[35px] p-1 border 
            border-4 rounded border-orange-500 cursor-pointer`
        }
        onClick={() => {
          handleFilter('eletricista');
        }}
      >
        <Image
          src="/eletricista-icone.png"
          alt="icon"
          width={20}
          height={20}
        />
      </div>
      <div
        className={
          selected == 'router'
            ? `w-[35px] p-1 border 
          border-4 rounded border-green-500`
            : `w-[35px] p-1 border 
            border-4 rounded border-orange-500 cursor-pointer`
        }
        onClick={() => {
          handleFilter('router');
        }}
      >
        <Image
          src="/usinagem-router-icone.png"
          alt="icon"
          className="ml-[2px]"
          width={15}
          height={15}
        />
      </div>
      <div
        className={
          selected == 'laser'
            ? `w-[35px] p-1 border 
          border-4 rounded border-green-500`
            : `w-[35px] p-1 border 
            border-4 rounded border-orange-500 cursor-pointer`
        }
        onClick={() => {
          handleFilter('laser');
        }}
      >
        <Image
          src="/usinagem-laser-icone.png"
          alt="icon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
