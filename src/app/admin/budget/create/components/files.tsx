import { VersattiModal } from '@/components/admin/versatti-modal';
import { useLoading } from '@/components/ui/is-loading';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DownloadCloudIcon, TrashIcon } from 'lucide-react';
import { useState } from 'react';

export default function Files() {
  const [files] = useState([]);
  const handleDeleteFile = () => {};
  const handleDownloadFile = () => {};

  const handleUploadFile = () => {};
  return (
    <VersattiModal
      buttonId={'arquivos'}
      modalContent={
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
              {files.map((file) => {
                return (
                  <TableRow key={file.name}>
                    <TableCell className="w-full font-medium">
                      {file.name}
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
                );
              })}
            </TableBody>
          </Table>
        </div>
      }
      modalTitle={'Arquivos'}
      modalDescription={''}
      modalButtonText={'Upload'}
      modalButtonOnClick={() => {
        handleUploadFile();
      }}
    />
  );
}
