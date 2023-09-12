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
import SectorRow from './table-row';
import TableFilters from './table-filters';

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
          Setores de produção - Usinagem
        </h6>
        <div className="ml-auto flex items-center space-x-5">
          <TableFilters />
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
            <TableHead>Tamanho</TableHead>
            <TableHead>Material</TableHead>
            <TableHead>Cor</TableHead>
            <TableHead>Maquina</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <SectorRow
            os={'000001'}
            product={'Revestimento ACM'}
            date={'10/10/2023'}
            size={'200x100'}
            material={'ACM'}
            color={'Azul'}
            machine={'Router'}
          />
        </TableBody>
      </Table>
    </div>
  );
}
