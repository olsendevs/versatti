import { TableRow, TableCell } from '@/components/ui/table';

import Image from 'next/image';

export default function OrderTableRow({
  os,
  product,
  date,
  execution,
}: any) {
  return (
    <TableRow className="">
      <TableCell className="">{os}</TableCell>
      <TableCell>{product}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell className="">
        <div className="flex space-x-2">
          <div
            className="w-[35px] p-1 border 
          border-4 rounded border-green-500"
          >
            <Image
              src="/serralheiro-icone.png"
              alt="icon"
              width={20}
              height={20}
            />
          </div>
          <div
            className="w-[35px] p-1 border 
          border-4 rounded border-green-500"
          >
            <Image
              src="/impressao-icone.png"
              alt="icon"
              width={20}
              height={20}
            />
          </div>
          <div
            className="w-[35px] p-1 border 
          border-4 rounded border-green-500"
          >
            <Image
              src="/tinturaria-icone.png"
              alt="icon"
              width={20}
              height={20}
            />
          </div>
          <div
            className="w-[35px] p-1 border 
          border-4 rounded border-orange-500"
          >
            <Image
              src="/eletricista-icone.png"
              alt="icon"
              width={20}
              height={20}
            />
          </div>
          <div
            className="w-[35px] p-1 border 
          border-4 rounded border-orange-500"
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
            className="w-[35px] p-1 border 
          border-4 rounded border-orange-500"
          >
            <Image
              src="/usinagem-laser-icone.png"
              alt="icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
