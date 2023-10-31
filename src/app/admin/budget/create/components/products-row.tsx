import { Ball } from '@/components/admin/ball';
import { VersattiModal } from '@/components/admin/versatti-modal';
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
import Materials from './materials';

export default function ProductsRow({
  handleInputChange,
  products,
  setProducts,
  option,
  productsData,
  setProductsData,
}: any) {
  const [materialsDone, setMaterialsDone] = useState<any>(
    [],
  );

  const addNewProduct = () => {
    productsData.proposals[option - 1].products.push({
      product_id: undefined,
      product_description: '',
      quantity: undefined,
      height: undefined,
      width: undefined,
      m2: undefined,
      materials: [],
      price: undefined,
      discount_percentage: undefined,
    });
    setProductsData({ ...productsData });
  };

  const removeProduct = (idToRemove: any) => {
    if (idToRemove != 1) {
      const updatedRows = productsData.filter(
        (row: any) => row !== idToRemove,
      );
      setProductsData([...updatedRows]);
    }
  };

  async function fetchData() {
    try {
      const token = JSON.parse(
        localStorage.getItem('token') || '',
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?fields=["product_id", "product_description", "materials","price"]`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const responseData = await response.json();

      console.log(responseData.items);

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
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token') || '';
    localStorage.clear();
    localStorage.setItem('token', token);
  }, []);

  const [
    selectedProductOptions,
    setSelectedProductOptions,
  ] = useState<any>({});

  const [materials, setMaterials] = useState<any>([]);

  // Adicione esta função para lidar com a seleção de produto para cada linha
  const handleSelectProductForRow = (
    productId: any,
    rowId: any,
  ) => {
    setSelectedProductOptions({
      ...selectedProductOptions,
      [rowId]: productId,
    });
  };

  const handleSelectProduct = (e: any, row: any) => {
    setProductsData({ ...productsData });
    const prd = productsData.proposals[
      option - 1
    ].products.find((x: any) => x.product_id == undefined);
    if (prd) {
      const selectedProduct = products.find(
        (x: any) => x.product_id == e,
      );
      console.log(selectedProduct);
      prd.product_id = selectedProduct.product_id;
      prd.product_description =
        selectedProduct.product_description;
      prd.m2 = selectedProduct.price.value;
      prd.height = selectedProduct.height;
      prd.width = selectedProduct.height;
      setProductsData({ ...productsData });
    }

    setMaterials(
      products
        .find((x: any) => x.product_id == e)
        ?.materials.map((m: any, index: number) => {
          return { ...m, id: index + 1 };
        }),
    );
    console.log(
      products
        .find((x: any) => x.product_id == e)
        ?.materials.map((m: any, index: number) => {
          return { ...m, id: index + 1 };
        }),
    );
    handleSelectProductForRow(e, row);
  };

  return productsData.proposals[option - 1].products.map(
    (product: any, index: any) => (
      <TableRow key={index} className="">
        <TableCell
          className={`p-0 w-[5%] ${
            !selectedProductOptions[index]
              ? 'cursor-not-allowed '
              : ''
          }`}
        >
          {' '}
          <Input
            className={
              !selectedProductOptions[index]
                ? 'pointer-events-none'
                : ''
            }
            type="number"
            placeholder="Ex: 2"
            name={`quantity_${index}`}
            onChange={(e) => {
              const prd =
                productsData.proposals[option - 1].products[
                  index
                ];

              prd.quantity = Number(e.target.value);
              setProductsData({ ...productsData });
            }}
          />
        </TableCell>
        <TableCell className="p-0 w-[35%]">
          <Select
            name={`product_${index}`}
            onValueChange={(e) => {
              handleSelectProduct(e, index);
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
        <TableCell
          className={`p-0 w-[8%] ${
            !selectedProductOptions[index]
              ? 'cursor-not-allowed '
              : 'cursor-pointer'
          }`}
        >
          <div
            className={`flex items-center`}
            onClick={() => {
              document
                .getElementById(
                  `materiais-${option}-${index}`,
                )
                ?.click();
              localStorage.setItem(
                'product-material',
                index.toString(),
              );
            }}
          >
            {materialsDone.includes(
              `${option}-${index}`,
            ) ? (
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
        <VersattiModal
          buttonId={`materiais-${option}-${index}`}
          modalContent={
            <Materials
              productsData={productsData}
              setProductsData={setProductsData}
              materials={materials}
              setMaterials={setMaterials}
              proposal={option}
              id={index}
            />
          }
          modalTitle={'Selecionar materiais'}
          modalDescription={''}
          modalButtonText={'Salvar'}
          modalButtonOnClick={() => {
            console.log(`${option}-${index}`);

            materialsDone.push(`${option}-${index}`);
            setMaterialsDone([...materialsDone]);
            console.log(materialsDone);
            document.getElementById('close-modal')?.click();
          }}
        />
        <TableCell
          className={`p-0 w-[5%] ${
            products.find(
              (x: any) =>
                x.product_id == product.product_id,
            )?.price.unit_measurement == 'm2' &&
            selectedProductOptions[index]
              ? 'cursor-not-allowed'
              : ''
          }`}
        >
          {' '}
          <Input
            className={
              products.find(
                (x: any) =>
                  x.product_id == product.product_id,
              )?.price.unit_measurement == 'm2' &&
              selectedProductOptions[index]
                ? 'pointer-events-none'
                : ''
            }
            type="number"
            placeholder="Ex: 100"
            name={`height_${index}`}
            onChange={(e) =>
              handleInputChange(
                `height`,
                e.target.value,
                index,
                option,
              )
            }
          />
        </TableCell>

        <TableCell
          className={`p-0 w-[5%] ${
            products.find(
              (x: any) =>
                x.product_id == product.product_id,
            )?.price.unit_measurement == 'm2' &&
            selectedProductOptions[index]
              ? 'cursor-not-allowed'
              : ''
          }`}
        >
          <Input
            className={
              products.find(
                (x: any) =>
                  x.product_id == product.product_id,
              )?.price.unit_measurement == 'm2' &&
              selectedProductOptions[index]
                ? 'pointer-events-none'
                : ''
            }
            type="number"
            placeholder="Ex: 200"
            name={`width_${index}`}
            onChange={(e) =>
              handleInputChange(
                `width`,
                e.target.value,
                index,
                option,
              )
            }
          />
        </TableCell>
        <TableCell
          className={`p-0 w-[6%] ${
            products.find(
              (x: any) =>
                x.product_id == product.product_id,
            )?.price.unit_measurement == 'm2' &&
            !selectedProductOptions[index]
              ? ''
              : 'cursor-not-allowed'
          }`}
        >
          <Input
            className={
              products.find(
                (x: any) =>
                  x.product_id == product.product_id,
              )?.price.unit_measurement == 'm2' &&
              !selectedProductOptions[index]
                ? ''
                : 'pointer-events-none'
            }
            value={
              selectedProductOptions[index]
                ? products.find(
                    (x: any) =>
                      x.product_id == product.product_id,
                  )?.price.value
                : ''
            }
            type="number"
            placeholder="Ex: m2"
            name={`m2_${index}`}
            onChange={(e) => {
              const prd =
                productsData.proposals[option - 1].products[
                  index
                ];

              prd.m2 = Number(e.target.value);
              setProductsData(prd);
            }}
          />
        </TableCell>
        <TableCell
          className={`p-0 w-[6%] ${
            !selectedProductOptions[index]
              ? 'cursor-not-allowed '
              : ''
          }`}
        >
          <Input
            className={
              !selectedProductOptions[index]
                ? 'pointer-events-none'
                : ''
            }
            type="number"
            placeholder="Ex: 10"
            name={`discount_${index}`}
            onChange={(e) => {
              const prd =
                productsData.proposals[option - 1].products[
                  index
                ];
              prd.discount_percentage = Number(
                e.target.value,
              );
              setProductsData({ ...productsData });
            }}
          />
        </TableCell>
        <TableCell
          className={`p-0 w-[7%] ${
            !selectedProductOptions[index]
              ? 'cursor-not-allowed '
              : ''
          }`}
        >
          {' '}
          <Input
            className={
              !selectedProductOptions[index]
                ? 'pointer-events-none'
                : ''
            }
            type="number"
            placeholder="Ex: 1000,00"
            name={`price_${index}`}
            onChange={(e) => {
              const prd =
                productsData.proposals[option - 1].products[
                  index
                ];

              prd.price = Number(e.target.value);
              setProductsData({ ...productsData });
            }}
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
              onClick={() => removeProduct(index)}
            />
          </div>
        </TableCell>
      </TableRow>
    ),
  );
}
