import {
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
} from '@/components/ui/table';
import { ClipboardIcon } from '@radix-ui/react-icons';
import { ReloadIcon } from '@radix-ui/react-icons';
import InstalationRow from './table-row';
import { useEffect, useState } from 'react';
import { useLoading } from '@/components/ui/is-loading';
import Filters from './filters';

export default function DataTable() {
  const [instalations, setInstalations] = useState([]);
  const { setIsLoading } = useLoading();
  async function fetchData() {
    setIsLoading(true);
    try {
      const token = JSON.parse(
        localStorage.getItem('token') || '',
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/productions?department_id=7`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const responseData = await response.json();
      console.log(responseData);
      setInstalations(responseData.items);
    } catch (error) {
      console.error('Error:', error);
      setInstalations([]);
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
        `${process.env.NEXT_PUBLIC_API_URL}/productions?department_id=1&search=${terms}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const responseData = await response.json();

      setInstalations(responseData.items);
    } catch (error) {
      console.error('Error:', error);
      setInstalations([]);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Filters searchData={searchData} />
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
          <h6 className="text-sm font-bold">Instalação</h6>
          <div className="ml-auto flex items-center space-x-5">
            <ReloadIcon
              className="cursor-pointer mr-1 h-4 w-4 text-[#FF8800]"
              onClick={() => {
                setInstalations([]);
                fetchData();
              }}
            />
          </div>
        </div>
        <Table className="">
          <TableHeader className="bg-[#FAFBFF] border-y border-gray-300">
            <TableRow>
              <TableHead className="">Número OS</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Data instalação</TableHead>
              <TableHead>Tempo instalação</TableHead>
              <TableHead>Local</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {instalations.map((instalation: any) => {
              return (
                <InstalationRow
                  key={Math.floor(
                    Math.random() * (99999 - 1) + 1,
                  )}
                  os={instalation.service_order_id}
                  product={instalation.product_description}
                  date={
                    instalation.installation_date.split(
                      'T',
                    )[0]
                  }
                  time={instalation.execution_time_minutes}
                  location={instalation.address}
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
