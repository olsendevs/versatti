'use client';
import * as React from 'react';
import Products from './components/products';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import Budget from './components/budget';
import Payment from './components/payment';
import Address from './components/address';
import Files from './components/files';
import { BudgetType } from '@/types/budget';

export default function CreateServiceOrderPage() {
  const [quoteData, setQuoteData] =
    React.useState<BudgetType>({
      deadline: '',
      is_delivery: true,
      additional_information: null,
      address: {
        cep: '',
        state: '',
        city: '',
        neighborhood: '',
        complement: '',
        address_name: '',
        address_number: undefined,
      },
      payment: {
        payment_method: '',
        incoming_percentage: undefined,
        installments: undefined,
        payment_incoming: '',
      },
      proposals: [
        {
          proposal_id: 1,
          products: [
            {
              product_id: undefined,
              product_description: '',
              quantity: undefined,
              height: undefined,
              width: undefined,
              m2: undefined,
              materials: [],
              price: undefined,
              discount_percentage: undefined,
            },
          ],
        },
      ],
      client_id: undefined,
      client_name: '',
      quote_status: '',
      sales_responsible: '',
    });

  const handleSubmit = async () => {};

  return (
    <div className="">
      <Files />
      <div className="grid grid-cols-2 gap-4 w-[98%]">
        <Budget
          quoteData={quoteData}
          setQuoteData={setQuoteData}
        />
        <Payment
          quoteData={quoteData}
          setQuoteData={setQuoteData}
        />
      </div>
      <Address
        quoteData={quoteData}
        setQuoteData={setQuoteData}
      />
      <Products
        quoteData={quoteData}
        setQuoteData={setQuoteData}
      />

      <div className="w-[15%] ml-auto mr-9 flex">
        <Button
          type="submit"
          variant={'outline'}
          onClick={() => {
            quoteData.proposals.push({
              proposal_id: 2,
              products: [
                {
                  product_id: undefined,
                  product_description: '',
                  quantity: undefined,
                  height: undefined,
                  width: undefined,
                  m2: undefined,
                  materials: [],
                  price: undefined,
                  discount_percentage: undefined,
                },
              ],
            });
            setQuoteData({ ...quoteData });
            document.getElementById('add-product')?.click();
          }}
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
