import {
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
} from '@/components/ui/table';
import Image from 'next/image';
import ProductsRow from './table-row';
import { TrashIcon } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

export default function Products({
  hasProductOptions,
  setHasProductOptions,
  selectedProductOption,
  setSelectedProductOption,
  formData,
  setFormData,
  option,
  setMaterials,
  materials,
  setMaterialsData,
  materialsData,
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
      {hasProductOptions ? (
        <div className="flex">
          <div className="flex align-center items-center p-4 ">
            <Image
              src="/titulo-icone.png"
              alt="icon"
              width={18}
              height={18}
            />
            <h6 className="text-sm font-bold ml-2">
              Produtos - Opção {option}
            </h6>
          </div>
          <div className="flex align-center items-center p-4 ml-auto">
            <TrashIcon
              className="mr-4 text-red-500 cursor-pointer"
              onClick={() => {
                setHasProductOptions(false);
              }}
            />

            <Checkbox
              checked={selectedProductOption == option}
              onCheckedChange={() => {
                setSelectedProductOption(option);
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex align-center items-center p-4 ">
          <Image
            src="/titulo-icone.png"
            alt="icon"
            width={18}
            height={18}
          />
          <h6 className="text-sm font-bold ml-2">
            Produtos
          </h6>
        </div>
      )}

      <Table className="">
        <TableHeader className="bg-[#FAFBFF] border-y border-gray-300">
          <TableRow>
            <TableHead>Qtd</TableHead>
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
            setMaterials={setMaterials}
            materialsData={materialsData}
            setMaterialsData={setMaterialsData}
            materials={materials}
            handleInputChange={handleFieldChange}
          />
        </TableBody>
      </Table>
    </div>
  );
}
