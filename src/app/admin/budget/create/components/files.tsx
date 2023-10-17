import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DownloadCloudIcon, TrashIcon } from 'lucide-react';

export default function Files() {
  const handleDeleteFile = () => {};
  const handleDownloadFile = () => {};
  return (
    <div>
      <Table>
        <TableHeader className="bg-[#FAFBFF]  border-gray-300">
          <TableRow>
            <TableHead className="w-[100px]">
              Nomes
            </TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="w-full font-medium">
              arquivo-2023.cdr
            </TableCell>
            <TableCell className="text-right flex">
              <DownloadCloudIcon
                className="mr-4 cursor-pointer index-99"
                onClick={() => {
                  handleDeleteFile();
                }}
              />
              <TrashIcon
                className="mr-4 cursor-pointer index-99"
                onClick={() => {
                  handleDeleteFile();
                }}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="w-full font-medium">
              layout-2023.cdr
            </TableCell>
            <TableCell className="text-right flex">
              <DownloadCloudIcon
                className="mr-4 cursor-pointer index-99"
                onClick={() => {
                  handleDownloadFile();
                }}
              />
              <TrashIcon
                className="mr-4 cursor-pointer index-99"
                onClick={() => {
                  handleDeleteFile();
                }}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
