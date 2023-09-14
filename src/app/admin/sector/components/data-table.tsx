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

export default function DataTable() {
  const [sectors, setSectors] = useState([]);
  const [departament, setDepartament] =
    useState('SERRALHEIRA');

  async function fetchData() {
    try {
      const token = JSON.parse(
        localStorage.getItem('token') || '',
      );

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/productions`,
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
          Setores de produção - Usinagem
        </h6>
        <div className="ml-auto flex items-center space-x-5">
          <TableFilters />
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
                product={sector.order_description}
                date={
                  sector.installation_date.split('T')[0]
                }
                size={`${sector.width}x${sector.height}`}
                material={sector.materials[0].material_type}
                color={sector.materials[0].colors}
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
  );
}
