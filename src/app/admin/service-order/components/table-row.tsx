import { TableRow, TableCell } from '@/components/ui/table';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function OrderTableRow({
  os,
  product,
  date,
  execution,
}: any) {
  const [departmentIds, setDepartmentIds] = useState([]);

  const extractDepartmentIds = (products: any) => {
    let departments: any = [];

    products.forEach((productItem: any) => {
      productItem.departments.forEach((department: any) => {
        departments.push({
          [department.department_id]:
            department.department_status,
        });
      });
    });

    setDepartmentIds(departments);
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
          {departmentIds[5] ? (
            <div
              className={`w-[35px] p-1 border 
            border-4 rounded ${
              departmentIds[5] != 'Pendente'
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
          ) : (
            <></>
          )}
          {departmentIds[1] ? (
            <div
              className={`w-[35px] p-1 border 
            border-4 rounded ${
              departmentIds[1] == 'Pendente'
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
          ) : (
            <></>
          )}
          {departmentIds[6] ? (
            <div
              className={`w-[35px] p-1 border 
            border-4 rounded ${
              departmentIds[6] == 'Pendente'
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
          ) : (
            <></>
          )}
          {departmentIds[0] ? (
            <div
              className={`w-[35px] p-1 border 
            border-4 rounded ${
              departmentIds[0] == 'Pendente'
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
          ) : (
            <></>
          )}
          {departmentIds[4] ? (
            <div
              className={`w-[35px] p-1 border 
            border-4 rounded ${
              departmentIds[4] == 'Pendente'
                ? 'border-green-500'
                : 'border-orange-500'
            } `}
            >
              <Image
                src="/usinagem-router-icone.png"
                alt="icon"
                width={20}
                height={20}
              />
            </div>
          ) : (
            <></>
          )}
          {departmentIds[2] ? (
            <div
              className={`w-[35px] p-1 border 
            border-4 rounded ${
              departmentIds[2] == 'Pendente'
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
          ) : (
            <></>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
}
