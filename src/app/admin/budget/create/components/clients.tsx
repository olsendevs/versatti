import { Input } from '@/components/ui/input';

export default function Clients({
  clients,
  setClients,
}: any) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
            type="text"
            placeholder="Nome da empresa"
            value={clients.client_name}
            onChange={(e) =>
              setClients({
                ...clients,
                client_name: e.target.value,
              })
            }
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
            type="text"
            placeholder="Nome do representante"
            value={clients.representantName}
            onChange={(e) =>
              setClients({
                ...clients,
                representantName: e.target.value,
              })
            }
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
            type="text"
            placeholder="CEP"
            value={clients.cep}
            onChange={(e) =>
              setClients({
                ...clients,
                cep: e.target.value,
              })
            }
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
            type="text"
            placeholder="Cidade"
            value={clients.city}
            onChange={(e) =>
              setClients({
                ...clients,
                city: e.target.value,
              })
            }
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2"
            type="text"
            placeholder="Numero"
            value={clients.number}
            onChange={(e) =>
              setClients({
                ...clients,
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
            value={clients.cpf_cnpj}
            onChange={(e) =>
              setClients({
                ...clients,
                cpf_cnpj: e.target.value,
              })
            }
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
            type="text"
            placeholder="Telefone do representante"
            value={clients.representantNumber}
            onChange={(e) =>
              setClients({
                ...clients,
                representantNumber: e.target.value,
              })
            }
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
            type="text"
            placeholder="Estado"
            value={clients.state}
            onChange={(e) =>
              setClients({
                ...clients,
                state: e.target.value,
              })
            }
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2 mb-4"
            type="text"
            placeholder="Rua"
            value={clients.street}
            onChange={(e) =>
              setClients({
                ...clients,
                street: e.target.value,
              })
            }
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[100%] py-2"
            type="text"
            placeholder="Complemento"
            value={clients.additionals}
            onChange={(e) =>
              setClients({
                ...clients,
                additionals: e.target.value,
              })
            }
          />
        </div>
      </div>
    </>
  );
}
