import { Input } from '@/components/ui/input';
import Image from 'next/image';

export default function Budget({
  budgetData,
  setBudgetData,
}: any) {
  console.log(budgetData);
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
          value={budgetData.order_description}
          onChange={(e) =>
            setBudgetData({
              ...budgetData,
              order_description: e.target.value,
            })
          }
        />
      </div>
      <div className="flex items-center space-x-2 w-full mt-4">
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[90%] py-2"
          type="text"
          onFocus={(e) => (e.target.type = 'date')}
          onBlur={(e) => (e.target.type = 'text')}
          placeholder="Cliente"
          value={budgetData.deadline_date}
          onChange={(e) =>
            setBudgetData({
              ...budgetData,
              deadline_date: e.target.value,
            })
          }
        />
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[30%] py-2"
          type="text"
          placeholder="Prazo"
          value={budgetData.endDate}
          onChange={(e) =>
            setBudgetData({
              ...budgetData,
              client_id: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}
