import {
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
} from '@/components/ui/table';
import Image from 'next/image';
import ProductsRow from './table-row';

export default function DataTable({
  formData,
  setFormData,
}: any) {
  const handleFieldChange = (
    fieldName: any,
    value: any,
    id: any,
  ) => {
    setFormData({
      ...formData,
      [fieldName + '-' + id]: value,
    });
  };

  return (
    <div
      className="rounded-lg border w-[98%]
      border-blue-100 border-opacity-70 bg-white mt-5
      shadow-md "
    >
      <div className="flex align-center items-center p-4 ">
        <Image
          src="/titulo-icone.png"
          alt="icon"
          width={18}
          height={18}
        />
        <h6 className="text-sm font-bold ml-2">Produtos</h6>
      </div>
      <Table className="">
        <TableHeader className="bg-[#FAFBFF] border-y border-gray-300">
          <TableRow>
            <TableHead>Qtd</TableHead>
            <TableHead>Ambiente</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Material</TableHead>
            <TableHead>Altura</TableHead>
            <TableHead>Largura</TableHead>
            <TableHead>m2</TableHead>
            <TableHead>Desconto%</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead></TableHead>
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
