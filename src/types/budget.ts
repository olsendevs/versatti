export type Material = {
  id: string;
  material_type: string;
  color: string;
  thickness: number;
};

export type Product = {
  product_id: number | undefined;
  product_description: string;
  quantity: number | undefined;
  height: number | undefined;
  width: number | undefined;
  m2: number | undefined;
  materials: Material[];
  price: number | undefined;
  discount_percentage: number | undefined;
};

export type ProposalType = {
  proposal_id: number;
  products: Product[];
};

export type PaymentType = {
  payment_method: string;
  incoming_percentage: number | undefined;
  installments: number | undefined;
  payment_incoming: string;
};

export type AddressType = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  complement: string;
  address_name: string;
  address_number: number | undefined;
};

export type BudgetType = {
  client_id: number | undefined;
  client_name: string;
  quote_status: string;
  sales_responsible: string;
  proposals: ProposalType[];
  payment: PaymentType;
  address: AddressType;
  is_delivery: boolean;
  deadline: string;
  additional_information: string | null;
};
