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
  materialsData,
  setMaterialsData,
}: any) {
  useEffect(() => {
    console.log(materialsData);
  }, [materialsData]);

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
          {materials.map((e: any) => {
            return (
              <TableRow key={''}>
                <TableCell className="w-[40%] font-medium p-0 pl-1">
                  {e.material}
                </TableCell>
                <TableCell className="w-[25%] font-medium p-0">
                  <Select
                    name={''}
                    onValueChange={(e: any) => {
                      console.log(materialsData);
                      let updated = materialsData;
                      updated.color = e;
                      setMaterialsData(updated);
                      console.log(materialsData);
                    }}
                  >
                    <SelectTrigger className="w-full border-none">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      {e.colors.map((item: any) => (
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
                    />
                    <Image
                      src="/deletar-icone.png"
                      alt="icon"
                      className="ml-[2px] cursor-pointer"
                      width={20}
                      height={20}
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
