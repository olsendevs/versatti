import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TableRow, TableCell } from '@/components/ui/table';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductsRow({
  handleInputChange,
}: any) {
  const [productRows, setProductRows] = useState([
    { id: 1 },
  ]);

  const addNewProduct = () => {
    const newId = productRows.length + 1;
    setProductRows([...productRows, { id: newId }]);
  };

  const removeProduct = (idToRemove: any) => {
    if (idToRemove != 1) {
      const updatedRows = productRows.filter(
        (row) => row.id !== idToRemove,
      );
      setProductRows(updatedRows);
    }
  };

  return (
    <>
      {productRows.map((row) => (
        <TableRow key={row.id} className="">
          <TableCell className="p-0">
            {' '}
            <Input
              className=""
              type="number"
              placeholder="Ex: 2"
              name={`quantity_${row.id}`}
              onChange={(e) =>
                handleInputChange(
                  `quantity_${row.id}`,
                  e.target.value,
                )
              }
            />
          </TableCell>
          <TableCell className="p-0">
            <Select
              name={`product_${row.id}`}
              onValueChange={(e) =>
                handleInputChange(`product_${row.id}`, e)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">
                  System
                </SelectItem>
              </SelectContent>
            </Select>
          </TableCell>
          <TableCell className="p-0">
            {' '}
            <Input
              className=""
              type="number"
              placeholder="Ex: 100"
              name={`heigth_${row.id}`}
              onChange={(e) =>
                handleInputChange(
                  `heigth_${row.id}`,
                  e.target.value,
                )
              }
            />
          </TableCell>
          <TableCell className="p-0">
            {' '}
            <Input
              className=""
              type="number"
              placeholder="Ex: 200"
              name={`size_${row.id}`}
              onChange={(e) =>
                handleInputChange(
                  `size_${row.id}`,
                  e.target.value,
                )
              }
            />
          </TableCell>
          <TableCell className="p-0 border">
            <div className="flex space-x-2 ml-4 ">
              <Image
                src="/adicionar-icone.png"
                alt="icon"
                className="ml-[2px] cursor-pointer"
                width={20}
                height={20}
                onClick={addNewProduct}
              />
              <Image
                src="/deletar-icone.png"
                alt="icon"
                className="ml-[2px] cursor-pointer"
                width={20}
                height={20}
                onClick={() => removeProduct(row.id)}
              />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
