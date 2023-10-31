import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React, { useEffect } from 'react';
import ClientsSelect from './clients-select';
import { getClients } from '@/api';
import Clients from './clients';

export default function Budget({
  quoteData,
  setQuoteData,
}: any) {
  const [selectedClient, setSelectedClient] =
    React.useState<any>();

  const [selectClients, setSelectClients] = React.useState(
    [],
  );
  useEffect(() => {
    getClients(setSelectClients);
  }, []);

  useEffect(() => {
    const newQuote = quoteData;
    if (selectedClient) {
      newQuote.client_id = selectedClient.client_id;
      newQuote.client_name = selectedClient.client_name;

      setQuoteData(newQuote);
    }
  }, [selectedClient]);

  return (
    <div className="bg-white max-w-[10000px] p-4 rad rounded-xl">
      <div className="flex align-center items-center pb-2">
        <Image
          src="/titulo-icone.png"
          alt="icon"
          width={18}
          height={18}
        />
        <h6 className="text-sm font-bold ml-2">
          Orçamento
        </h6>
      </div>
      <div className="flex items-center space-x-2 w-full">
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-full py-2"
          type="text"
          placeholder="Observação"
          value={quoteData?.additional_information || ''}
          onChange={(e) =>
            setQuoteData({
              ...quoteData,
              additional_information: e.target.value,
            })
          }
        />
      </div>
      <div className="flex items-center space-x-2 w-full mt-4">
        <ClientsSelect
          placeholder="Clientes"
          options={selectClients}
          selectedClient={selectedClient}
          setSelectedClient={setSelectedClient}
          name={'clientes'}
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[90%] py-2 text-gray-500"
        />
        <Clients setSelectClients={setSelectClients} />
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[30%] py-2"
          type="text"
          placeholder="Prazo"
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
          value={quoteData.deadline}
          onChange={(e) =>
            setQuoteData({
              ...quoteData,
              deadline: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}
