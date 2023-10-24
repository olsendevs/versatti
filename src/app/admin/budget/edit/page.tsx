'use client';

import * as React from 'react';
import Products from './components/products';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';
import { useLoading } from '@/components/ui/is-loading';
import Budget from './components/budget';
import Payment from './components/payment';
import Modais from './components/modais';
import Address from './components/address';

export default function CreateServiceOrderPage() {
  const [productsData, setProductsData] = React.useState(
    {},
  );
  const [secondOptionData, setSecondOptionData] =
    React.useState({});
  const [hasProductOptions, setHasProductOptions] =
    React.useState(false);

  const [selectedProductOption, setSelectedProductOption] =
    React.useState('');

  const [selectClients, setSelectClients] = React.useState(
    [],
  );

  const [budgetData, setBudgetData] = React.useState({});

  const [addressData, setAddressData] = React.useState({});

  const [materials, setMaterials] = React.useState([]);

  const [materialsDone, setMaterialsDone] = React.useState(
    [],
  );

  const [materialsData, setMaterialsData] = React.useState([
    {
      color: '',
      material: '',
      thickness: '',
    },
  ]);
  const [selectedClient, setSelectedClient] =
    React.useState('');

  const { setIsLoading } = useLoading();

  const router = useRouter();

  const handleSubmit = async () => {
    setIsLoading(true);
    let products: Array<any> = [];
    const productsKeys = Object.entries(productsData);
    for (var x = 0; x < productsKeys.length / 4; x++) {
      const product: any = {};
      productsKeys
        .filter(
          (e) => e[0].split('-')[1] == (x + 1).toString(),
        )
        .forEach((e: any) => {
          product[e[0].split('-')[0]] = e[1];
        });
      products.push({ ...product, materials: [] });
    }
    const data = { ...budgetData, products: products };

    try {
      const token = JSON.parse(
        localStorage.getItem('token') || '',
      );

      const url = `${process.env.NEXT_PUBLIC_API_URL}/service_orders`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (responseData.service_order_id) {
        toast({
          description:
            'Ordem de serviço criada com sucesso!',
          variant: 'default',
        });
        setTimeout(() => {
          router.push('/admin/service-order');
        }, 2000);
      } else {
        toast({
          description:
            'Erro ao criar ordem de serviço. Tente novamente',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setIsLoading(false);
  };

  const addProductOption = () => {
    setHasProductOptions(true);
    setSelectedProductOption('');
  };
  return (
    <div className="">
      <Modais
        materialsDone={materialsDone}
        setMaterialsDone={setMaterialsDone}
        materials={materials}
        materialsData={materialsData}
        setMaterials={setMaterials}
        setMaterialsData={setMaterialsData}
        setSelectClients={setSelectClients}
      />
      <div className="grid grid-cols-2 gap-4 w-[98%]">
        <Budget
          budgetData={budgetData}
          selectClients={selectClients}
          setSelectClients={setSelectClients}
          setBudgetData={setBudgetData}
          selectedClient={selectedClient}
          setSelectedClient={setSelectedClient}
        />
        <Payment
          paymentData={budgetData}
          setPaymentData={setBudgetData}
        />
      </div>
      <Address
        selectClients={selectClients}
        selectedClient={selectedClient}
        addressData={addressData}
        setAddressData={setAddressData}
      />
      <Products
        selectedProductOption={selectedProductOption}
        setSelectedProductOption={setSelectedProductOption}
        hasProductOptions={hasProductOptions}
        setHasProductOptions={setHasProductOptions}
        productsData={secondOptionData}
        materialsDone={materialsDone}
        setFormData={setSecondOptionData}
        option={'01'}
        setMaterials={setMaterials}
        setMaterialsData={setMaterialsData}
        materialsData={materialsData}
      />
      {hasProductOptions ? (
        <Products
          selectedProductOption={selectedProductOption}
          setSelectedProductOption={
            setSelectedProductOption
          }
          setMaterials={setMaterials}
          hasProductOptions={hasProductOptions}
          setHasProductOptions={setHasProductOptions}
          productsData={productsData}
          setFormData={setProductsData}
          setMaterialsData={setMaterialsData}
          materialsData={materialsData}
          option={'02'}
        />
      ) : (
        <></>
      )}

      <div className="w-[30%] ml-auto mr-9 flex">
        <Button
          type="submit"
          variant={'outline'}
          onClick={() => {
            document.getElementById('arquivos')?.click();
          }}
        >
          Arquivos
        </Button>
        <Button
          type="submit"
          variant={'outline'}
          onClick={() => {}}
        >
          Solicitar Arte
        </Button>
        <Button
          type="submit"
          variant={'outline'}
          onClick={() => {}}
          disabled={
            hasProductOptions && selectedProductOption == ''
          }
        >
          Converter pedido
        </Button>
        <Button
          type="submit"
          variant={'outline'}
          onClick={handleSubmit}
        >
          Emitir Orçamento
        </Button>
        <Button
          type="submit"
          variant={'outline'}
          onClick={addProductOption}
        >
          Adicionar Opção
        </Button>
        <Button
          type="submit"
          variant={'confirm'}
          onClick={handleSubmit}
        >
          Salvar
        </Button>
      </div>
      <Toaster />
    </div>
  );
}
