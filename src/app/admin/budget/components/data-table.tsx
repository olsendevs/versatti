import {
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
} from '@/components/ui/table';
import Image from 'next/image';
import { ReloadIcon } from '@radix-ui/react-icons';
import OrderTableRow from './table-row';
import { useEffect, useState } from 'react';
import { useLoading } from '@/components/ui/is-loading';
import Header from './header';
import { Pagination } from '@/components/ui/pagination';

export default function DataTable() {
  const [orderServices, setOrderServices] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { setIsLoading } = useLoading();
  async function fetchData() {
    setIsLoading(true);
    try {
      const token = JSON.parse(
        localStorage.getItem('token') || '',
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/quotes?size=5&page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const responseData = await response.json();

      setOrderServices(responseData.items);
      setTotalPages(responseData.pages);
    } catch (error) {
      console.error('Error:', error);
      setOrderServices([]);
    }
    setIsLoading(false);
  }

  async function searchData(terms: string) {
    setIsLoading(true);
    try {
      const token = JSON.parse(
        localStorage.getItem('token') || '',
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/service_orders?search=${terms}`,
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
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <>
      <Header searchData={searchData} />
      <div
        className="rounded-lg border w-[98%]
      border-blue-100 border-opacity-70 bg-white mt-4
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
            Orçamento
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
              <TableHead className="">Número</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Data Criação</TableHead>
              <TableHead>Prazo entrega</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Valor total</TableHead>
              <TableHead className=""></TableHead>
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
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}
