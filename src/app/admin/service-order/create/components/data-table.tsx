import {
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
} from '@/components/ui/table';
import { ClipboardIcon } from '@radix-ui/react-icons';
import { ReloadIcon } from '@radix-ui/react-icons';
import ProductsRow from './table-row';
import { useState } from 'react';

export default function DataTable({
  formData,
  setFormData,
}: any) {
  const handleFieldChange = (
    fieldName: any,
    value: any,
  ) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  return (
    <div
      className="rounded-lg border w-[98%]
      border-blue-100 border-opacity-70 bg-white mt-5
      shadow-md "
    >
      <div className="flex align-center items-center p-4 ">
        <ClipboardIcon
          className="mr-1 h-4 w-4 text-[#FF8800]"
          onClick={() => {}}
        />
        <h6 className="text-sm font-bold">Produtos</h6>
      </div>
      <Table className="">
        <TableHeader className="bg-[#FAFBFF] border-y border-gray-300">
          <TableRow>
            <TableHead>Quantidade</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Altura</TableHead>
            <TableHead>Largura</TableHead>
            <TableHead className="text-white">
              {`actions`}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <ProductsRow
            handleInputChange={handleFieldChange}
          />
        </TableBody>
      </Table>
    </div>
  );
}
