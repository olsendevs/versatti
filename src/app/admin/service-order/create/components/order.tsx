import { Input } from '@/components/ui/input';
import { ClipboardIcon } from '@radix-ui/react-icons';

export default function Order({
  orderData,
  setOrderData,
}: any) {
  return (
    <div className="bg-white max-w-[98%] p-4 rad rounded-xl">
      <div className="flex align-center items-center pb-2">
        <ClipboardIcon
          className="mr-1 h-4 w-4 text-[#FF8800]"
          onClick={() => {}}
        />
        <h6 className="text-sm font-bold">Pedido</h6>
      </div>
      <div className="flex items-center space-x-2 w-full">
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-full py-2"
          type="text"
          placeholder="Descrição da ordem de serviço"
          value={orderData.order_description}
          onChange={(e) =>
            setOrderData({
              ...orderData,
              order_description: e.target.value,
            })
          }
        />

        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[50%] py-2"
          type="date"
          placeholder="Prazo"
          value={orderData.deadline_date}
          onChange={(e) =>
            setOrderData({
              ...orderData,
              deadline_date: e.target.value,
            })
          }
        />
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-full py-2"
          type="text"
          placeholder="Cliente"
          value={orderData.client_id}
          onChange={(e) =>
            setOrderData({
              ...orderData,
              client_id: e.target.value,
            })
          }
        />
      </div>
      <div className="flex items-center space-x-2 w-full mt-4">
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[126%] py-2"
          type="text"
          placeholder="Endereço"
          value={orderData.address}
          onChange={(e) =>
            setOrderData({
              ...orderData,
              address: e.target.value,
            })
          }
        />
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[90%] py-2"
          type="date"
          placeholder="Data instalação"
          value={orderData.installation_date}
          onChange={(e) =>
            setOrderData({
              ...orderData,
              installation_date: e.target.value,
            })
          }
        />
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-full py-2"
          type="text"
          placeholder="Tempo instalação"
          value={orderData.execution_time_minutes}
          onChange={(e) =>
            setOrderData({
              ...orderData,
              execution_time_minutes: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}
