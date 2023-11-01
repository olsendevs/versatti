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
  productsData,
  setProductsData,
  id,
  proposal,
}: any) {
  useEffect(() => {
    setMaterials(
      materials.map((e: any, index: any) => {
        return { ...e, id: index };
      }),
    );
    console.log(materials);
    console.log(
      productsData.proposals[proposal - 1].products[id]
        .materials,
    );
  }, [productsData]);
  useEffect(() => {
    console.log(materials);
    console.log(
      productsData.proposals[proposal - 1].products[id]
        .materials,
    );
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
          {productsData.proposals[proposal - 1].products[id]
            .materials.length <= materials.length
            ? materials.map((material: any) => {
                return (
                  <TableRow key={''}>
                    <TableCell className="w-[40%] font-medium p-0 pl-1">
                      {material.material}
                    </TableCell>
                    <TableCell className="w-[25%] font-medium p-0">
                      <Select
                        name={''}
                        value={
                          productsData.proposals[
                            proposal - 1
                          ].products[id].materials.find(
                            (item: any) =>
                              item.id == material.id,
                          )?.color
                        }
                        onValueChange={(e: any) => {
                          const newMaterialData =
                            productsData.proposals[
                              proposal - 1
                            ].products[id];

                          const materialFinded =
                            newMaterialData.materials.find(
                              (item: any) =>
                                item.id == material.id,
                            );

                          if (materialFinded) {
                            materialFinded.color = e;

                            setProductsData({
                              ...productsData,
                            });
                          } else {
                            productsData.proposals[
                              proposal - 1
                            ].products[id].materials.push({
                              id: material.id,
                              material: material.material,
                              color: e,
                              thickness: '',
                            });
                            console.log(productsData);
                            setProductsData({
                              ...productsData,
                            });
                          }
                        }}
                      >
                        <SelectTrigger className="w-full border-none">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {material.colors.map(
                            (item: any) => (
                              <SelectItem
                                key={item}
                                value={item}
                              >
                                {item}
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="w-[10%] font-medium p-0">
                      <Input
                        className="border-none"
                        type="number"
                        placeholder="Expessura "
                        value={
                          productsData.proposals[
                            proposal - 1
                          ].products[id].materials.find(
                            (item: any) =>
                              item.id == material.id,
                          )?.thickness
                        }
                        onChange={(e: any) => {
                          const newMaterialData =
                            productsData.proposals[
                              proposal - 1
                            ].products[id];

                          const materialFinded =
                            newMaterialData.materials.find(
                              (item: any) =>
                                item.id == material.id,
                            );

                          if (materialFinded) {
                            materialFinded.thickness =
                              e.target.value;

                            console.log(materialFinded);

                            setProductsData({
                              ...productsData,
                            });
                          } else {
                            productsData.proposals[
                              proposal - 1
                            ].products[id].materials.push({
                              id: material.id,
                              material: material.material,
                              color: '',
                              thickness: Number(
                                e.target.value,
                              ),
                            });

                            setProductsData({
                              ...productsData,
                            });
                          }
                          console.log(productsData);
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
                            materials.push({
                              id: materials.length + 1,
                              colors: material.colors,
                              thickness: material.thickness,
                              material: material.material,
                            });
                            setMaterials([...materials]);

                            productsData.proposals[
                              proposal - 1
                            ].products[id].materials.push({
                              id: productsData.proposals[
                                proposal - 1
                              ].products[id].materials
                                .length,
                              material: material.material,
                              color: '',
                              thickness: '',
                            });

                            console.log(materials);
                            console.log(productsData);

                            setProductsData({
                              ...productsData,
                            });
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
              })
            : productsData.proposals[proposal - 1].products[
                id
              ].materials.map((material: any) => {
                return (
                  <TableRow key={''}>
                    <TableCell className="w-[40%] font-medium p-0 pl-1">
                      {material.material}
                    </TableCell>
                    <TableCell className="w-[25%] font-medium p-0">
                      <Select
                        name={''}
                        value={
                          productsData.proposals[
                            proposal - 1
                          ].products[id].materials.find(
                            (item: any) =>
                              item.id == material.id,
                          )?.color
                        }
                        onValueChange={(e: any) => {
                          const newMaterialData =
                            productsData.proposals[
                              proposal - 1
                            ].products[id];

                          const materialFinded =
                            newMaterialData.materials.find(
                              (item: any) =>
                                item.id == material.id,
                            );

                          if (materialFinded) {
                            materialFinded.color = e;

                            setProductsData({
                              ...productsData,
                            });
                          } else {
                            productsData.proposals[
                              proposal - 1
                            ].products[id].materials.push({
                              id: material.id,
                              material: material.material,
                              color: e,
                              thickness: '',
                            });

                            setProductsData({
                              ...productsData,
                            });
                          }
                        }}
                      >
                        <SelectTrigger className="w-full border-none">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {materials
                            .find(
                              (x: any) =>
                                x.material ==
                                material.material,
                            )
                            .colors.map((item: any) => (
                              <SelectItem
                                key={item}
                                value={item}
                              >
                                {item}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="w-[10%] font-medium p-0">
                      <Input
                        className="border-none"
                        type="number"
                        placeholder="Expessura "
                        value={
                          productsData.proposals[
                            proposal - 1
                          ].products[id].materials.find(
                            (item: any) =>
                              item.id == material.id,
                          )?.thickness
                        }
                        onChange={(e: any) => {
                          console.log(e);
                          const newMaterialData =
                            productsData.proposals[
                              proposal - 1
                            ].products[id];
                          console.log(newMaterialData);
                          const materialFinded =
                            newMaterialData.materials.find(
                              (item: any) =>
                                item.id == material.id,
                            );
                          console.log(material);
                          console.log(materialFinded);
                          if (materialFinded) {
                            materialFinded.thickness =
                              e.target.value;

                            setProductsData({
                              ...productsData,
                            });
                          } else {
                            productsData.proposals[
                              proposal - 1
                            ].products[id].materials.push({
                              id: material.id,
                              material: material.material,
                              color: '',
                              thickness: Number(
                                e.target.value,
                              ),
                            });

                            setProductsData({
                              ...productsData,
                            });
                          }
                          console.log(productsData);
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
                            materials.push({
                              id: materials.length + 2,
                              colors: material.colors,
                              thickness: material.thickness,
                              material: material.material,
                            });
                            setMaterials([...materials]);

                            productsData.proposals[
                              proposal - 1
                            ].products[id].materials.push({
                              id: materials.length + 1,
                              material: material.material,
                              color: '',
                              thickness: '',
                            });

                            console.log(materials);
                            console.log(productsData);

                            setProductsData({
                              ...productsData,
                            });
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
