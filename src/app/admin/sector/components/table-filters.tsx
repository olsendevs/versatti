import Image from 'next/image';
import { useState } from 'react';

export default function TableFilters( {selected, setSelected}: any) {
  const handleFilter = (item: any) => {
    setSelected(item);
  };

  return (
    <div className="flex space-x-2">
      <div
        className={
          selected == 5
            ? `w-[35px] p-1 border 
          border-4 rounded border-green-500`
            : `w-[35px] p-1 border 
            border-4 rounded border-orange-500 cursor-pointer`
        }
        onClick={() => {
          handleFilter(5);
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
          selected == 1
            ? `w-[35px] p-1 border 
          border-4 rounded border-green-500`
            : `w-[35px] p-1 border 
            border-4 rounded border-orange-500 cursor-pointer`
        }
        onClick={() => {
          handleFilter(1);
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
          selected == 6
            ? `w-[35px] p-1 border 
          border-4 rounded border-green-500`
            : `w-[35px] p-1 border 
            border-4 rounded border-orange-500 cursor-pointer`
        }
        onClick={() => {
          handleFilter(6);
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
          selected == 8
            ? `w-[35px] p-1 border 
          border-4 rounded border-green-500`
            : `w-[35px] p-1 border 
            border-4 rounded border-orange-500 cursor-pointer`
        }
        onClick={() => {
          handleFilter(8);
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
          selected == 2
            ? `w-[35px] p-1 border 
          border-4 rounded border-green-500`
            : `w-[35px] p-1 border 
            border-4 rounded border-orange-500 cursor-pointer`
        }
        onClick={() => {
          handleFilter(2);
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
          selected == 4
            ? `w-[35px] p-1 border 
          border-4 rounded border-green-500`
            : `w-[35px] p-1 border 
            border-4 rounded border-orange-500 cursor-pointer`
        }
        onClick={() => {
          handleFilter(4);
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
