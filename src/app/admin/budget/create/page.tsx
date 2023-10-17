'use client';

import * as React from 'react';
import DataTable from './components/data-table';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';
import { useLoading } from '@/components/ui/is-loading';
import Budget from './components/budget';
import Payment from './components/payment';
import { VersattiModal } from '@/components/admin/versatti-modal';
import Modais from './components/modais';

export default function CreateServiceOrderPage() {
  const [formData, setFormData] = React.useState({});
  const [budgetData, setBudgetData] = React.useState({});
  const { setIsLoading } = useLoading();
  const router = useRouter();
  const handleSubmit = async () => {
    setIsLoading(true);
    let products: Array<any> = [];
    const productsKeys = Object.entries(formData);
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

  const addProductOption = () => {};
  return (
    <div className="">
      <Modais />
      <div className="grid grid-cols-2 gap-4 w-[98%]">
        <Budget
          budgetData={budgetData}
          setBudgetData={setBudgetData}
        />
        <Payment
          paymentData={budgetData}
          setPaymentData={setBudgetData}
        />
      </div>
      <DataTable
        formData={formData}
        setFormData={setFormData}
      />
      <div className="w-[50%] ml-auto mr-9 flex">
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
          onClick={() => {
            document.getElementById('cliente')?.click();
          }}
        >
          Solicitar Arte
        </Button>
        <Button
          type="submit"
          variant={'outline'}
          onClick={() => {
            document.getElementById('materiais')?.click();
          }}
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
          Criar ordem
        </Button>
      </div>
      <Toaster />
    </div>
  );
}
