import { VersattiModal } from '@/components/admin/versatti-modal';
import Files from './files';
import Clients from './clients';
import Materials from './materials';
import { useState } from 'react';
import { useLoading } from '@/components/ui/is-loading';
import { toast } from '@/components/ui/use-toast';

export default function Modais({
  materials,
  setMaterials,
  materialsData,
  setMaterialsData,
}: any) {
  const [clients, setClients] = useState({
    client_name: '',
    cpf_cnpj: '',
    is_cnpj: true,
    representantName: '',
    representantNumber: '',
    cep: '',
    city: '',
    state: '',
    street: '',
    number: '',
    additionals: '',
  });

  const { setIsLoading } = useLoading();

  const handleClientsSubmit = async () => {
    setIsLoading(true);

    try {
      const token = JSON.parse(
        localStorage.getItem('token') || '',
      );

      const url = `${process.env.NEXT_PUBLIC_API_URL}/clients`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clients),
      });

      const responseData = await response.json();
      setClients(responseData);
      if (responseData.service_order_id) {
        toast({
          description: 'Cliente criado com sucesso!',
          variant: 'default',
        });
      } else {
        toast({
          description:
            'Erro ao criar cliente. Tente novamente',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setIsLoading(false);
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
        modalButtonOnClick={() => {}}
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
