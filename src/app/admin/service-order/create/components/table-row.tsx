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
import { useEffect, useState } from 'react';

export default function ProductsRow({
  handleInputChange,
}: any) {
  const [productRows, setProductRows] = useState([
    { id: 1 },
  ]);
  const [products, setProducts] = useState([
    { product_description: '', product_id: '' },
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

  async function fetchData() {
    try {
      const token = JSON.parse(
        localStorage.getItem('token') || '',
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/product_description`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const responseData = await response.json();

      setProducts(responseData);
    } catch (error) {
      console.error('Error:', error);
      setProducts([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
                  `quantity`,
                  e.target.value,
                  row.id,
                )
              }
            />
          </TableCell>
          <TableCell className="p-0">
            <Select
              name={`product_${row.id}`}
              onValueChange={(e) =>
                handleInputChange(`product_id`, e, row.id)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {products.map((product: any) => {
                  return (
                    <SelectItem
                      key={product.product_id}
                      value={product.product_id}
                    >
                      {product.product_description}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </TableCell>
          <TableCell className="p-0">
            {' '}
            <Input
              className=""
              type="number"
              placeholder="Ex: 100"
              name={`height_${row.id}`}
              onChange={(e) =>
                handleInputChange(
                  `height`,
                  e.target.value,
                  row.id,
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
              name={`width_${row.id}`}
              onChange={(e) =>
                handleInputChange(
                  `width`,
                  e.target.value,
                  row.id,
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
