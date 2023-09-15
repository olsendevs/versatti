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
import SectorRow from './table-row';
import TableFilters from './table-filters';
import { useEffect, useState } from 'react';
import { useLoading } from '@/components/ui/is-loading';
import Filters from './filters';

export default function DataTable() {
  const [sectors, setSectors] = useState([]);
  const { setIsLoading } = useLoading();
  const [departament, setDepartament] = useState(5);

  async function fetchData() {
    setIsLoading(true);
    try {
      const token = JSON.parse(
        localStorage.getItem('token') || '',
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/productions?department_id=${departament}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const responseData = await response.json();

      setSectors(responseData.items);
    } catch (error) {
      console.error('Error:', error);
      setSectors([]);
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
        `${process.env.NEXT_PUBLIC_API_URL}/productions?department_id=${departament}&search=${terms}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const responseData = await response.json();

      setSectors(responseData.items);
    } catch (error) {
      console.error('Error:', error);
      setSectors([]);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [departament]);

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
          <h6 className="text-sm font-bold">
            Setores de produção - Usinagem
          </h6>
          <div className="ml-auto flex items-center space-x-5">
            <TableFilters
              selected={departament}
              setSelected={setDepartament}
            />
            <ReloadIcon
              className="cursor-pointer mr-1 h-4 w-4 text-[#FF8800]"
              onClick={() => {
                setSectors([]);
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
              <TableHead>Tamanho</TableHead>
              <TableHead>Material</TableHead>
              <TableHead>Cor</TableHead>
              <TableHead>Maquina</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sectors.map((sector: any) => {
              return (
                <SectorRow
                  key={Math.floor(
                    Math.random() * (100 - 1) + 1,
                  )}
                  os={sector.service_order_id}
                  product={sector.product_description}
                  date={
                    sector.installation_date.split('T')[0]
                  }
                  size={`${sector.width}x${sector.height}`}
                  material={
                    sector.materials[0]
                      ? sector.materials[0].material_type
                      : ''
                  }
                  color={
                    sector.materials[0]
                      ? sector.materials[0].colors
                      : ''
                  }
                  machine={
                    sector.production_department
                      .department_name
                  }
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
