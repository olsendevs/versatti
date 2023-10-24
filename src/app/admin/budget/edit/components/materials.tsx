import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Materials({
  materials,
  setMaterials,
  materialsData,
  setMaterialsData,
}: any) {
  useEffect(() => {
    setMaterialsData(materials);
    const productId = localStorage.getItem(
      'product-material',
    );
    console.log(productId);
    if (productId) {
      const materialData =
        localStorage.getItem(`material-${productId}`) || '';
      console.log(materialData);
      if (materialData != '') {
        setMaterialsData(JSON.parse(materialData));
      }
    } else {
      setMaterialsData(materials);
    }
  }, [materials]);

  return (
    <div>
      <Table>
        <TableHeader className="bg-[#FAFBFF]  border-gray-300">
          <TableRow>
            <TableHead className="w-[100px]">
              Nomes
            </TableHead>
            <TableHead className="w-[100px]">Cor</TableHead>
            <TableHead className="w-[100px]">
              Espessura
            </TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {materials.map((material: any) => {
            return (
              <TableRow key={''}>
                <TableCell className="w-[40%] font-medium p-0 pl-1">
                  {material.material}
                </TableCell>
                <TableCell className="w-[25%] font-medium p-0">
                  <Select
                    name={''}
                    value={
                      materialsData.find(
                        (x: any) =>
                          x.material == material.material,
                      )?.color || ''
                    }
                    onValueChange={(e: any) => {
                      console.log(materialsData);
                      const materialFinded =
                        materialsData.find(
                          (item: any) =>
                            item.material ==
                            material.material,
                        );

                      materialFinded.color = e;

                      const updatedMaterialsData = [
                        ...materialsData,
                      ];

                      setMaterialsData(
                        updatedMaterialsData,
                      );
                    }}
                  >
                    <SelectTrigger className="w-full border-none">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {material.colors.map((item: any) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="w-[10%] font-medium p-0">
                  <Input
                    className="border-none"
                    type="text"
                    placeholder="Expessura "
                    value={
                      materialsData.find(
                        (x: any) =>
                          x.material == material.material,
                      )?.thickness || ''
                    }
                    onChange={(e: any) => {
                      const materialFinded =
                        materialsData.find(
                          (item: any) =>
                            item.material ==
                            material.material,
                        );
                      console.log(materialFinded);
                      materialFinded.thickness =
                        e.target.value;

                      const updatedMaterialsData = [
                        ...materialsData,
                      ];

                      setMaterialsData(
                        updatedMaterialsData,
                      );
                    }}
                    name={``}
                  />
                </TableCell>
                <TableCell className="text-right flex">
                  <div className="flex space-x-2 ml-4 ">
                    <Image
                      src="/adicionar-icone.png"
                      alt="icon"
                      className="ml-[2px] cursor-pointer"
                      width={20}
                      height={20}
                      onClick={() => {
                        setMaterials([
                          ...materials,
                          material,
                        ]);
                      }}
                    />
                    <Image
                      src="/deletar-icone.png"
                      alt="icon"
                      className="ml-[2px] cursor-pointer"
                      width={20}
                      height={20}
                      onClick={() => {
                        setMaterials(material);
                      }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
