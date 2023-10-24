import { Ball } from '@/components/admin/ball';
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
  setMaterials,
  materialsDone,
  materialsData,
}: any) {
  const [productRows, setProductRows] = useState([
    { id: 1 },
  ]);

  const [products, setProducts] = useState([
    {
      product_description: '',
      product_id: '',
      materials: [],
    },
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
        `${process.env.NEXT_PUBLIC_API_URL}/products?fields=["product_id", "product_description", "materials"]`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const responseData = await response.json();

      if (responseData.items.length > 0) {
        setProducts(responseData.items);
      }
    } catch (error) {
      console.error('Error:', error);
      setProducts([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, [materialsData]);

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    localStorage.clear();
    localStorage.setItem('token', token);
  }, []);

  useEffect(() => {
    console.log(materialsDone);
  }, [materialsDone]);

  return (
    <>
      {productRows.map((row) => (
        <TableRow key={row.id} className="">
          <TableCell className="p-0 w-[10%]">
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
          <TableCell className="p-0 w-[20%]">
            <Select
              name={`product_${row.id}`}
              onValueChange={(e) => {
                setMaterials(
                  products.find((x) => x.product_id == e)
                    ?.materials,
                );

                console.log(
                  products.find((x) => x.product_id == e)
                    ?.materials,
                );

                handleInputChange(`product_id`, e, row.id);
              }}
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
          <TableCell className="p-0 w-[8%]">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => {
                document
                  .getElementById('materiais')
                  ?.click();
                localStorage.setItem(
                  'product-material',
                  row.id.toString(),
                );
              }}
            >
              {materialsDone.includes(row.id.toString()) ? (
                <>
                  <Ball color={'green'} />
                  <div className="ml-2">Definido</div>
                </>
              ) : (
                <>
                  {' '}
                  <Ball color={'yellow'} />
                  <div className="ml-2">Não definido</div>
                </>
              )}
            </div>
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
          <TableCell className="p-0">
            <Input
              className=""
              type="number"
              placeholder="Ex: m2"
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
          <TableCell className="p-0 ">
            <Input
              className=""
              type="number"
              placeholder="Ex: 10"
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
              placeholder="Ex: 1000,00"
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
          <TableCell className="p-0 border w-[5%]">
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
