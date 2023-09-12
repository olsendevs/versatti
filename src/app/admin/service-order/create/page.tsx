'use client';

import * as React from 'react';
import Order from './components/order';
import DataTable from './components/data-table';
import { Button } from '@/components/ui/button';

export default function CreateServiceOrderPage() {
  const [formData, setFormData] = React.useState({});
  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <div className="">
      <Order />
      <DataTable
        formData={formData}
        setFormData={setFormData}
      />
      <div className="w-[98%] flex">
        <Button
          className="bg-[#02AE13] ml-auto font-extralight p-2 px-6 my-2 
        hover:bg-green-600"
          type="submit"
          onClick={handleSubmit}
        >
          Criar ordem
        </Button>
      </div>
    </div>
  );
}
