import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function Payment({
  paymentData,
  setPaymentData,
}: any) {
  console.log(paymentData);
  return (
    <div className="bg-white max-w-[100%] p-4 rad rounded-xl">
      <div className="flex align-center items-center pb-2">
        <Image
          src="/titulo-icone.png"
          alt="icon"
          width={18}
          height={18}
        />
        <h6 className="text-sm font-bold ml-2">
          Pagamento
        </h6>
      </div>
      <div className="flex items-center space-x-2 w-full">
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[70%] py-2"
          type="text"
          placeholder="Condição"
          value={paymentData.order_description}
          onChange={(e) =>
            setPaymentData({
              ...paymentData,
              order_description: e.target.value,
            })
          }
        />
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[50%] py-2"
          type="text"
          placeholder="Sinal"
          value={paymentData.order_description}
          onChange={(e) =>
            setPaymentData({
              ...paymentData,
              order_description: e.target.value,
            })
          }
        />
      </div>
      <div className="flex items-center space-x-2 w-full mt-4">
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[70%] py-2"
          type="text"
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
          placeholder="Método"
          value={paymentData.deadline_date}
          onChange={(e) =>
            setPaymentData({
              ...paymentData,
              deadline_date: e.target.value,
            })
          }
        />
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[50%] py-2"
          type="text"
          placeholder="Percentual sinal"
          value={paymentData.endDate}
          onChange={(e) =>
            setPaymentData({
              ...paymentData,
              client_id: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}
