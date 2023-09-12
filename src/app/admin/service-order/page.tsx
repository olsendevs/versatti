'use client';

import * as React from 'react';
import Filters from './components/filters';
import DataTable from './components/data-table';

export default function ServiceOrderPage() {
  return (
    <div className="">
      <Filters />
      <DataTable />
    </div>
  );
}
