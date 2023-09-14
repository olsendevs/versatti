import { TableRow, TableCell } from '@/components/ui/table';

import Image from 'next/image';

export default function SectorRow({
  os,
  product,
  date,
  size,
  material,
  color,
  machine,
}: any) {
  return (
    <TableRow className="">
      <TableCell>{os}</TableCell>
      <TableCell>{product}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{size}</TableCell>
      <TableCell>{material}</TableCell>
      <TableCell>{color}</TableCell>
      <TableCell>{machine}</TableCell>
    </TableRow>
  );
}
