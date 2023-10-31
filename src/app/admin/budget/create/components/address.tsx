import { getClientsAddress } from '@/api';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group';
import { AddressType } from '@/types/budget';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Address({
  quoteData,
  setQuoteData,
}: any) {
  const [addressData, setAddressData] =
    useState<AddressType>({
      cep: '',
      address_name: '',
      address_number: undefined,
      city: '',
      complement: '',
      neighborhood: '',
      state: '',
    });
  const [addressType, setAddressType] =
    useState('take-store');
  const [clientAddress, setClientsAddress] = useState([]);
  useEffect(() => {
    const newBudget = quoteData;

    if (newBudget) {
      newBudget.address = addressData;

      setQuoteData(newBudget);
    }
  }, [addressData]);
  useEffect(() => {
    if (addressType == 'same-address') {
      if (clientAddress.length == 0) {
        getClientsAddress(setClientsAddress);
      } else {
        const client: any = clientAddress.find(
          (e: any) => e.client_id == quoteData.client_id,
        );
        if (client) setAddressData(client.address);
      }
    }

    if (addressType == 'new-address') {
      setAddressData({
        cep: '',
        address_name: '',
        address_number: undefined,
        city: '',
        complement: '',
        neighborhood: '',
        state: '',
      });
    }
  }, [addressType, clientAddress, quoteData]);

  return (
    <div className="bg-white max-w-[98%] p-4 mt-4 mb-9 rad rounded-xl">
      <div className="flex align-center items-center pb-2">
        <Image
          src="/titulo-icone.png"
          alt="icon"
          width={18}
          height={18}
        />
        <h6 className="text-sm font-bold ml-2">
          Endereço entrega
        </h6>
        <div className="ml-9">
          <RadioGroup
            onValueChange={(value) => {
              setAddressType(value);
            }}
            defaultValue="take-store"
            className="flex"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="new-address"
                id="new-address"
              />
              <Label htmlFor="new-address">
                Novo endereço
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="same-address"
                id="same-address"
              />
              <Label htmlFor="same-address">
                Mesmo endereço de cobrança
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="take-store"
                id="take-store"
              />
              <Label htmlFor="take-store">
                Retirada em loja
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      {addressType == 'take-store' ? (
        <></>
      ) : (
        <div className="flex items-center space-x-2 w-full">
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-full py-2"
            type="text"
            placeholder="CEP"
            value={addressData.cep}
            onChange={(e) => {
              setAddressData({
                cep: e.target.value,
                state: addressData.state,
                city: addressData.city,
                neighborhood: addressData.neighborhood,
                complement: addressData.complement,
                address_name: addressData.address_name,
                address_number: addressData.address_number,
              });
            }}
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-full py-2"
            type="text"
            placeholder="Estado"
            value={addressData.state}
            onChange={(e) => {
              setAddressData({
                cep: addressData.cep,
                state: e.target.value,
                city: addressData.city,
                neighborhood: addressData.neighborhood,
                complement: addressData.complement,
                address_name: addressData.address_name,
                address_number: addressData.address_number,
              });
            }}
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-full py-2"
            type="text"
            placeholder="Cidade"
            value={addressData.city}
            onChange={(e) => {
              setAddressData({
                cep: addressData.cep,
                state: addressData.state,
                city: e.target.value,
                neighborhood: addressData.neighborhood,
                complement: addressData.complement,
                address_name: addressData.address_name,
                address_number: addressData.address_number,
              });
            }}
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-full py-2"
            type="text"
            placeholder="Rua"
            value={addressData.address_name}
            onChange={(e) => {
              setAddressData({
                cep: addressData.cep,
                state: addressData.state,
                city: addressData.city,
                neighborhood: addressData.neighborhood,
                complement: addressData.complement,
                address_name: e.target.value,
                address_number: addressData.address_number,
              });
            }}
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-full py-2"
            type="text"
            placeholder="Bairro"
            value={addressData.neighborhood}
            onChange={(e) => {
              setAddressData({
                cep: addressData.cep,
                state: addressData.state,
                city: addressData.city,
                neighborhood: e.target.value,
                complement: addressData.complement,
                address_name: addressData.address_name,
                address_number: addressData.address_number,
              });
            }}
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-full py-2"
            type="number"
            placeholder="Numero"
            value={addressData.address_number}
            onChange={(e) => {
              setAddressData({
                cep: addressData.cep,
                state: addressData.state,
                city: addressData.city,
                neighborhood: addressData.neighborhood,
                complement: addressData.complement,
                address_name: addressData.address_name,
                address_number: Number(e.target.value),
              });
            }}
          />
          <Input
            className="rounded-lg border border-blue-100 
            bg-white shadow-md w-full py-2"
            type="text"
            placeholder="Complemento"
            value={addressData.complement}
            onChange={(e) => {
              setAddressData({
                cep: addressData.cep,
                state: addressData.state,
                city: addressData.city,
                neighborhood: addressData.neighborhood,
                complement: e.target.value,
                address_name: addressData.address_name,
                address_number: addressData.address_number,
              });
            }}
          />
        </div>
      )}
    </div>
  );
}
