import { VersattiModal } from '@/components/admin/versatti-modal';
import Files from './files';
import Clients from './clients';
import Materials from './materials';
import { useState } from 'react';
import { useLoading } from '@/components/ui/is-loading';
import { toast } from '@/components/ui/use-toast';
import { createClient, getClients } from '@/api';

export default function Modais({
  setMaterialsDone,
  materialsDone,
  materials,
  setMaterials,
  materialsData,
  setMaterialsData,
  setSelectClients,
}: any) {
  const [clients, setClients] = useState({
    client_name: '',
    cpf_cnpj: '',
    is_cnpj: true,
    representative_name: '',
    representative_phone_number: '',
    address: {
      cep: '',
      city: '',
      state: '',
      address_name: '',
      neighborhood: '',
      address_number: '',
      complement: '',
    },
  });

  const { setIsLoading } = useLoading();

  const handleClientsSubmit = async () => {
    await createClient(
      clients,
      setIsLoading,
      setClients,
      toast,
    );
    getClients(setSelectClients);
  };

  return (
    <div>
      <VersattiModal
        buttonId={'materiais'}
        modalContent={
          <Materials
            materials={materials}
            materialsData={materialsData}
            setMaterials={setMaterials}
            setMaterialsData={setMaterialsData}
          />
        }
        modalTitle={'Selecionar materiais'}
        modalDescription={''}
        modalButtonText={'Salvar'}
        modalButtonOnClick={() => {
          const id = localStorage.getItem(
            'product-material',
          );
          localStorage.setItem(
            `material-${id}`,
            JSON.stringify(materialsData),
          );
          console.log(id);
          setMaterialsDone([...materialsDone, id]);
          document.getElementById('close-modal')?.click();
        }}
      />
      <VersattiModal
        buttonId={'cliente'}
        modalContent={
          <Clients
            clients={clients}
            setClients={setClients}
          />
        }
        modalTitle={'Cadastro cliente'}
        modalDescription={''}
        modalButtonText={'Salvar'}
        modalButtonOnClick={() => handleClientsSubmit}
      />
      <VersattiModal
        buttonId={'arquivos'}
        modalContent={<Files />}
        modalTitle={'Arquivos'}
        modalDescription={''}
        modalButtonText={'Upload'}
        modalButtonOnClick={() => {}}
      />
    </div>
  );
}
