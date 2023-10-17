import { VersattiModal } from '@/components/admin/versatti-modal';
import VersattiSelect from '@/components/admin/versatti-select';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useState } from 'react';

export default function Modais() {
  const [customer, setCustomer] = useState({
    companyName: '',
    document: '',
    representantName: '',
    representantNumber: '',
    cep: '',
    city: '',
    state: '',
    street: '',
    number: '',
    additionals: '',
  });
  return (
    <div>
      <VersattiModal
        buttonId={'materiais'}
        modalContent={
          <>
            <h1>oi</h1>
          </>
        }
        modalTitle={'Selecionar materiais'}
        modalDescription={''}
        modalButtonText={'Salvar'}
        modalButtonOnClick={(e: any) => {}}
      />
      <VersattiModal
        buttonId={'cliente'}
        modalContent={
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <Input
                  className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
                  type="text"
                  placeholder="Nome da empresa"
                  value={customer.companyName}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      companyName: e.target.value,
                    })
                  }
                />
                <Input
                  className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
                  type="text"
                  placeholder="Nome do representante"
                  value={customer.representantName}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      representantName: e.target.value,
                    })
                  }
                />
                <Input
                  className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
                  type="text"
                  placeholder="CEP"
                  value={customer.cep}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      cep: e.target.value,
                    })
                  }
                />
                <Input
                  className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
                  type="text"
                  placeholder="Cidade"
                  value={customer.city}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      city: e.target.value,
                    })
                  }
                />
                <Input
                  className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2"
                  type="text"
                  placeholder="Numero"
                  value={customer.number}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      number: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <Input
                  className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
                  type="text"
                  placeholder="CPF/CNPJ"
                  value={customer.document}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      document: e.target.value,
                    })
                  }
                />
                <Input
                  className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
                  type="text"
                  placeholder="Telefone do representante"
                  value={customer.representantNumber}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      representantNumber: e.target.value,
                    })
                  }
                />
                <Input
                  className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
                  type="text"
                  placeholder="Estado"
                  value={customer.state}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      state: e.target.value,
                    })
                  }
                />
                <Input
                  className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
                  type="text"
                  placeholder="Rua"
                  value={customer.street}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      street: e.target.value,
                    })
                  }
                />
                <Input
                  className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2"
                  type="text"
                  placeholder="Complemento"
                  value={customer.additionals}
                  onChange={(e) =>
                    setCustomer({
                      ...customer,
                      additionals: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </>
        }
        modalTitle={'Cadastro cliente'}
        modalDescription={''}
        modalButtonText={'Salvar'}
        modalButtonOnClick={(e: any) => {}}
      />
      <VersattiModal
        buttonId={'arquivos'}
        modalContent={
          <>
            <h1>oi</h1>
          </>
        }
        modalTitle={'Arquivos'}
        modalDescription={''}
        modalButtonText={'Upload'}
        modalButtonOnClick={(e: any) => {}}
      />
    </div>
  );
}
