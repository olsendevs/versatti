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
import InstalationRow from './table-row';

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
        <h6 className="text-sm font-bold">Instalação</h6>
        <div className="ml-auto flex items-center space-x-5">
          <ReloadIcon
            className="cursor-pointer mr-1 h-4 w-4 text-[#FF8800]"
            onClick={() => {}}
          />
        </div>
      </div>
      <Table className="">
        <TableHeader className="bg-[#FAFBFF] border-y border-gray-300">
          <TableRow>
            <TableHead className="">Número OS</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Data instalação</TableHead>
            <TableHead>Tempo instalação</TableHead>
            <TableHead>Local</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <InstalationRow
            os={'000001'}
            product={'Revestimento ACM'}
            date={'10/10/2023'}
            time={'4 Horas'}
            location={
              'Rua avenida henrique eroles, 1197 - Mogi das Cruzes'
            }
          />
        </TableBody>
      </Table>
    </div>
  );
}
