import { TableRow, TableCell } from '@/components/ui/table';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function OrderTableRow({
  os,
  product,
  date,
  execution,
}: any) {
  const [departmentIds, setDepartmentIds] = useState<
    number[]
  >([]);

  const extractDepartmentIds = (products: any) => {
    const departmentIds: number[] = [];

    products.forEach((productItem: any) => {
      productItem.departments.forEach((department: any) => {
        departmentIds.push(department.department_id);
      });
    });

    setDepartmentIds(departmentIds);
  };

  useEffect(() => {
    extractDepartmentIds(execution);
  }, []);

  return (
    <TableRow className="">
      <TableCell className="">{os}</TableCell>
      <TableCell>{product}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell className="">
        <div className="flex space-x-2">
          <div
            className={`w-[35px] p-1 border 
            border-4 rounded ${
              departmentIds.includes(5)
                ? 'border-green-500'
                : 'border-orange-500'
            } `}
          >
            <Image
              src="/serralheiro-icone.png"
              alt="icon"
              width={20}
              height={20}
            />
          </div>
          <div
            className={`w-[35px] p-1 border 
           border-4 rounded ${
             departmentIds.includes(1)
               ? 'border-green-500'
               : 'border-orange-500'
           } `}
          >
            <Image
              src="/impressao-icone.png"
              alt="icon"
              width={20}
              height={20}
            />
          </div>
          <div
            className={`w-[35px] p-1 border 
               border-4 rounded ${
                 departmentIds.includes(6)
                   ? 'border-green-500'
                   : 'border-orange-500'
               } `}
          >
            <Image
              src="/tinturaria-icone.png"
              alt="icon"
              width={20}
              height={20}
            />
          </div>
          <div
            className={`w-[35px] p-1 border 
               border-4 rounded ${
                 departmentIds.includes(8)
                   ? 'border-green-500'
                   : 'border-orange-500'
               } `}
          >
            <Image
              src="/eletricista-icone.png"
              alt="icon"
              width={20}
              height={20}
            />
          </div>
          <div
            className={`w-[35px] p-1 border 
               border-4 rounded ${
                 departmentIds.includes(4)
                   ? 'border-green-500'
                   : 'border-orange-500'
               } `}
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
            className={`w-[35px] p-1 border 
                  border-4 rounded ${
                    departmentIds.includes(2)
                      ? 'border-green-500'
                      : 'border-orange-500'
                  } `}
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
