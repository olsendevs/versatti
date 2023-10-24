export const uploadFile = async (
  file: any,
  setIsLoading: any,
  setFiles: any,
  toast: any,
) => {
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

    setClients({
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
    if (responseData.client_id) {
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
export const createClient = async (
  clients: any,
  setIsLoading: any,
  setClients: any,
  toast: any,
) => {
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

    setClients({
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
    if (responseData.client_id) {
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

export const getClients = async (setSelectClients: any) => {
  try {
    const token = JSON.parse(
      localStorage.getItem('token') || '',
    );

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/clients?fields=["client_name"]`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const responseData = await response.json();
    console.log(responseData);
    setSelectClients(
      responseData.items.map((e: any) => e.client_name),
    );
    console.log(
      responseData.items.map((e: any) => e.client_name),
    );
  } catch (error) {
    console.error('Error:', error);
  }
};

export const getClientsAddress = async (
  setClientsAddress: any,
) => {
  try {
    const token = JSON.parse(
      localStorage.getItem('token') || '',
    );

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/clients?fields=["client_name", "address"]`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const responseData = await response.json();
    console.log(responseData);
    setClientsAddress(responseData.items);
  } catch (error) {
    console.error('Error:', error);
  }
};
