import { TableRow, TableCell } from '@/components/ui/table';

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
