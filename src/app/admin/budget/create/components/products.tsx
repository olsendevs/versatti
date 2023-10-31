import {
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
} from '@/components/ui/table';
import Image from 'next/image';
import ProductsRow from './products-row';
import { TrashIcon } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

export default function Products({
  quoteData,
  setQuoteData,
}: any) {
  const [selectedProductOption, setSelectedProductOption] =
    useState('');

  const [hasProductOptions, setHasProductOptions] =
    useState<boolean>(false);

  const addProductOption = () => {
    setHasProductOptions(true);
    setSelectedProductOption('');
    console.log(quoteData);
  };

  const [products, setProducts] = useState([
    {
      product_description: '',
      product_id: '',
      price: 0,
      materials: [],
    },
  ]);

  return (
    <>
      {!hasProductOptions ? (
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
            <h6 className="text-sm font-bold ml-2">
              Produtos
            </h6>
          </div>

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
                option="1"
                products={products}
                setProducts={setProducts}
                productsData={quoteData}
                setProductsData={setQuoteData}
              />
            </TableBody>
          </Table>
          <div className="p-2 text-black  bg-gray-200 text-sm">
            <div className="flex items-center">
              <div className="ml-auto flex">
                Valor total{' '}
                <div className="pl-4 pr-4 ml-4 border-black border bg-white">
                  {quoteData.proposals[0].products.reduce(
                    (sum: any, e: any) => {
                      console.log(quoteData);
                      return e.price
                        ? sum + Number(e.price)
                        : sum;
                    },
                    0,
                  )}
                </div>
              </div>
            </div>
          </div>
          <button
            className="hidden"
            id={'add-product'}
            onClick={addProductOption}
          ></button>
        </div>
      ) : (
        <>
          <div
            className="rounded-lg border w-[98%]
    border-blue-100 border-opacity-70 bg-white mt-5
    shadow-md "
          >
            <div className="flex">
              <div className="flex align-center items-center p-4 ">
                <Image
                  src="/titulo-icone.png"
                  alt="icon"
                  width={18}
                  height={18}
                />
                <h6 className="text-sm font-bold ml-2">
                  Produtos - Opção 1
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
                  checked={selectedProductOption == '1'}
                  onCheckedChange={() => {
                    setSelectedProductOption('1');
                  }}
                />
              </div>
            </div>
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
                  option="1"
                  products={products}
                  setProducts={setProducts}
                  productsData={quoteData}
                  setProductsData={setQuoteData}
                />
              </TableBody>
            </Table>
            <div className="p-2 text-black  bg-gray-200 text-sm">
              <div className="flex items-center">
                <div className="ml-auto flex">
                  Valor total{' '}
                  <div className="pl-4 pr-4 ml-4 border-black border bg-white">
                    {quoteData.proposals[0].products.reduce(
                      (sum: any, e: any) => {
                        console.log(e);
                        return e.price != undefined
                          ? sum + Number(e.price)
                          : sum;
                      },
                      0,
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg border w-[98%]
    border-blue-100 border-opacity-70 bg-white mt-5
    shadow-md "
          >
            <div className="flex">
              <div className="flex align-center items-center p-4 ">
                <Image
                  src="/titulo-icone.png"
                  alt="icon"
                  width={18}
                  height={18}
                />
                <h6 className="text-sm font-bold ml-2">
                  Produtos - Opção 2
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
                  checked={selectedProductOption == '2'}
                  onCheckedChange={() => {
                    setSelectedProductOption('2');
                  }}
                />
              </div>
            </div>
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
                  option="2"
                  products={products}
                  setProducts={setProducts}
                  productsData={quoteData}
                  setProductsData={setQuoteData}
                />
              </TableBody>
            </Table>
            <div className="p-2 text-black  bg-gray-200 text-sm">
              <div className="flex items-center">
                <div className="ml-auto flex">
                  Valor total{' '}
                  <div className="pl-4 pr-4 ml-4 border-black border bg-white">
                    {quoteData.proposals[1].products.reduce(
                      (sum: any, e: any) => {
                        console.log(quoteData);
                        return e.price
                          ? sum + Number(e.price)
                          : sum;
                      },
                      0,
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="hidden"
            id={'add-product'}
            onClick={addProductOption}
          ></button>
        </>
      )}
    </>
  );
}
