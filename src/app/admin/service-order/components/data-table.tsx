import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  TableCaption,
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { ClipboardIcon } from '@radix-ui/react-icons';
import { ReloadIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import OrderTableRow from './table-row';
import { useEffect, useState } from 'react';

export default function DataTable() {
  const [orderServices, setOrderServices] = useState([]);
  async function fetchData() {
    try {
      const token = JSON.parse(
        localStorage.getItem('token') || '',
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/service_orders`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const responseData = await response.json();

      setOrderServices(responseData.items);
    } catch (error) {
      console.error('Error:', error);
      setOrderServices([]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      className="rounded-lg border w-[98%]
      border-blue-100 border-opacity-70 bg-white mt-9
      shadow-md "
    >
      <div className="flex align-center items-center p-4 ">
        <ClipboardIcon
          className="mr-1 h-4 w-4 text-[#FF8800]"
          onClick={() => {}}
        />
        <h6 className="text-sm font-bold">
          Ordem de serviço
        </h6>
        <ReloadIcon
          className="cursor-pointer ml-auto mr-1 h-4 w-4 text-[#FF8800]"
          onClick={() => {
            setOrderServices([]);
            fetchData();
          }}
        />
      </div>
      <Table className="">
        <TableHeader className="bg-[#FAFBFF] border-y border-gray-300">
          <TableRow>
            <TableHead className="">Número OS</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Data instalação</TableHead>
            <TableHead className="">
              Setores em execução
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderServices.map((service: any) => {
            return (
              <OrderTableRow
                key={service.service_order_id}
                os={service.service_order_id}
                product={service.order_description}
                date={
                  service.installation_date.split('T')[0]
                }
                execution={service.products}
              />
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
