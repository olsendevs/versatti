import { TextField } from '@mui/material';

export default function Clients({
  clients,
  setClients,
}: any) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <TextField
            id="outlined-basic"
            label="Nome da empresa"
            variant="outlined"
            className=" border-blue-100 
            bg-white w-[100%] mb-4"
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
          <TextField
            id="outlined-basic"
            label="Nome do representante"
            variant="outlined"
            className=" border-blue-100 
            bg-white w-[100%] mb-4"
            type="text"
            placeholder="Nome do representante"
            value={clients.representative_name}
            onChange={(e) =>
              setClients({
                ...clients,
                representative_name: e.target.value,
              })
            }
          />
          <TextField
            id="outlined-basic"
            label="CEP"
            variant="outlined"
            className=" border-blue-100 
            bg-white w-[100%] mb-4"
            type="text"
            placeholder="CEP"
            value={clients.address.cep}
            onChange={(e) =>
              setClients({
                ...clients,
                address: {
                  ...clients.address,
                  cep: e.target.value,
                },
              })
            }
          />
          <TextField
            id="outlined-basic"
            label="Cidade"
            variant="outlined"
            className=" border-blue-100 
            bg-white w-[100%] mb-4"
            type="text"
            placeholder="Cidade"
            value={clients.address.city}
            onChange={(e) =>
              setClients({
                ...clients,
                address: {
                  ...clients.address,
                  city: e.target.value,
                },
              })
            }
          />
          <TextField
            id="outlined-basic"
            label="Numero"
            variant="outlined"
            className="bg-white w-[100%]"
            type="text"
            placeholder="Numero"
            value={clients.address.address_number}
            onChange={(e) =>
              setClients({
                ...clients,
                address: {
                  ...clients.address,
                  address_number: e.target.value,
                },
              })
            }
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="CPF/CNPJ"
            variant="outlined"
            className=" border-blue-100 
            bg-white w-[100%] mb-4"
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
          <TextField
            id="outlined-basic"
            label="Telefone do representante"
            variant="outlined"
            className=" border-blue-100 
            bg-white w-[100%] mb-4"
            type="text"
            placeholder="Telefone do representante"
            value={clients.representative_phone_number}
            onChange={(e) =>
              setClients({
                ...clients,
                representative_phone_number: e.target.value,
              })
            }
          />
          <TextField
            id="outlined-basic"
            label="Estado"
            variant="outlined"
            className=" border-blue-100 
            bg-white w-[100%] mb-4"
            type="text"
            placeholder="Estado"
            value={clients.address.state}
            onChange={(e) =>
              setClients({
                ...clients,
                address: {
                  ...clients.address,
                  state: e.target.value,
                },
              })
            }
          />
          <TextField
            id="outlined-basic"
            label="Rua"
            variant="outlined"
            className=" border-blue-100 
            bg-white w-[100%] mb-4"
            type="text"
            placeholder="Rua"
            value={clients.address.address_name}
            onChange={(e) =>
              setClients({
                ...clients,
                address: {
                  ...clients.address,
                  address_name: e.target.value,
                },
              })
            }
          />
          <TextField
            id="outlined-basic"
            label="Complemento"
            variant="outlined"
            className="bg-white w-[100%]"
            type="text"
            placeholder="Complemento"
            value={clients.address.complement}
            onChange={(e) =>
              setClients({
                ...clients,
                address: {
                  ...clients.address,
                  complement: e.target.value,
                },
              })
            }
          />
        </div>
      </div>
    </>
  );
}
