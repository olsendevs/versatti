import { TableRow, TableCell } from '@/components/ui/table';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function OrderTableRow({
  os,
  customer,
  createDate,
  deadlineDate,
  status,
  totalValue,
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
      <TableCell>{customer}</TableCell>
      <TableCell>{createDate}</TableCell>
      <TableCell>{deadlineDate}</TableCell>
      <TableCell>{status}</TableCell>
      <TableCell>{totalValue}</TableCell>
      <TableCell className="">
        <div className={`w-[35px] p-1`}>
          <Image
            src="/usinagem-seccionadora-icone.png"
            alt="icon"
            width={20}
            height={20}
          />
        </div>
      </TableCell>
    </TableRow>
  );
}
