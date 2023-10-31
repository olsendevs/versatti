import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { useEffect } from 'react';

export function VersattiModal({
  buttonId,
  modalContent,
  modalTitle,
  modalDescription,
  modalButtonText,
  modalButtonOnClick,
}: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="absolute hidden"
          variant="outline"
          id={buttonId}
        ></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[30vw]">
        <DialogHeader>
          <DialogTitle className="flex space-x-4 items-center">
            <Image
              src="/titulo-icone.png"
              alt="icon"
              width={18}
              height={18}
              className="mr-2"
            />
            {modalTitle}
          </DialogTitle>
          <DialogDescription>
            {modalDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {modalContent}
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            type="submit"
            onClick={() => {
              modalButtonOnClick();
            }}
          >
            {modalButtonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
