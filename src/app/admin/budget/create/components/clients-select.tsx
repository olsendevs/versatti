'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';

export default function ClientsSelect({
  placeholder,
  options,
  selectedClient,
  setSelectedClient,
}: any) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="select"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {selectedClient
            ? options
                .map((e: any) => e.toLowerCase())
                .find(
                  (option: any) => option == selectedClient,
                )
            : placeholder}
          <ChevronsUpDown className="mr-6 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <div>
        <Image
          src="/adicionar-icone.png"
          alt="icon"
          className="absolute ml-[-40px] mt-[-10px] cursor-pointer"
          width={20}
          height={20}
          onClick={() => {
            document.getElementById('cliente')?.click();
          }}
        />
      </div>
      <PopoverContent className="w-[30vw] p-0">
        <Command>
          <CommandInput placeholder="Pesquise pelo cliente..." />
          <CommandEmpty>
            Nenhum cliente encontrado.
          </CommandEmpty>
          <CommandGroup>
            {options.map((option: any) => (
              <CommandItem
                key={option}
                onSelect={(currentValue: any) => {
                  setSelectedClient(
                    currentValue === selectedClient
                      ? ''
                      : currentValue,
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    selectedClient === option
                      ? 'opacity-100'
                      : 'opacity-0',
                  )}
                />
                {option}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
