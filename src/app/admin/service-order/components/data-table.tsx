import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  TableCaption,
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { ClipboardIcon } from '@radix-ui/react-icons';
import { ReloadIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import OrderTableRow from './table-row';

export default function DataTable() {
  return (
    <div
      className="rounded-lg border w-[98%]
      border-blue-100 border-opacity-70 bg-white mt-9
      shadow-md "
    >
      <div className="flex align-center items-center p-4 ">
        <ClipboardIcon
          className="mr-1 h-4 w-4 text-[#FF8800]"
          onClick={() => {}}
        />
        <h6 className="text-sm font-bold">
          Ordem de serviço
        </h6>
        <ReloadIcon
          className="cursor-pointer ml-auto mr-1 h-4 w-4 text-[#FF8800]"
          onClick={() => {}}
        />
      </div>
      <Table className="">
        <TableHeader className="bg-[#FAFBFF] border-y border-gray-300">
          <TableRow>
            <TableHead className="">Número OS</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Data instalação</TableHead>
            <TableHead className="">
              Setores em execução
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <OrderTableRow
            os={'000001'}
            product={'Revestimento ACM'}
            date={'10/10/2023'}
            execution={''}
          />
        </TableBody>
      </Table>
    </div>
  );
}
