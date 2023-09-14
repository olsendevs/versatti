import { Input } from '@/components/ui/input';
import { ClipboardIcon } from '@radix-ui/react-icons';

export default function Order() {
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
        />
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[50%] py-2"
          type="text"
          placeholder="Prazo"
        />
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-full py-2"
          type="text"
          placeholder="Cliente"
        />
      </div>
      <div className="flex items-center space-x-2 w-full mt-4">
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[126%] py-2"
          type="text"
          placeholder="Endereço"
        />
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-[90%] py-2"
          type="text"
          placeholder="Data instalação"
        />
        <Input
          className="rounded-lg border border-blue-100 
            bg-white shadow-md w-full py-2"
          type="text"
          placeholder="Tempo instalação"
        />
      </div>
    </div>
  );
}
