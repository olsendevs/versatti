import { TableRow, TableCell } from '@/components/ui/table';

export default function InstalationRow({
  os,
  product,
  date,
  time,
  location,
}: any) {
  return (
    <TableRow className="">
      <TableCell>{os}</TableCell>
      <TableCell>{product}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{time}</TableCell>
      <TableCell>{location}</TableCell>
    </TableRow>
  );
}
