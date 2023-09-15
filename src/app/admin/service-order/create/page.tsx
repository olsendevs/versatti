'use client';

import * as React from 'react';
import Order from './components/order';
import DataTable from './components/data-table';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { Toaster } from '@/components/ui/toaster';

export default function CreateServiceOrderPage() {
  const [formData, setFormData] = React.useState({});
  const [orderData, setOrderData] = React.useState({});
  const router = useRouter();
  const handleSubmit = async () => {
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
    const data = { ...orderData, products: products };

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
  };
  return (
    <div className="">
      <Order
        orderData={orderData}
        setOrderData={setOrderData}
      />
      <DataTable
        formData={formData}
        setFormData={setFormData}
      />
      <div className="w-[98%] flex">
        <Button
          className="bg-[#02AE13] ml-auto font-extralight p-2 px-6 my-2 
        hover:bg-green-600"
          type="submit"
          onClick={handleSubmit}
        >
          Criar ordem
        </Button>
      </div>
      <Toaster />
    </div>
  );
}
