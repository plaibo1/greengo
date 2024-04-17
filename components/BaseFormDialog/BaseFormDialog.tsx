import { ButtonPrimary } from "../Common/Button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import React, { ReactNode } from "react";
import { PatternFormat } from "react-number-format";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const LocalNumberInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <Input
        ref={ref}
        id="name"
        className="w-full py-6 text-lg text-black"
        placeholder="+7 (999) 999 99 99"
        {...props}
      />
    );
  }
);

LocalNumberInput.displayName = "LocalNumberInput";

export function BaseFormDialog({ children }: { children?: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <ButtonPrimary className="py-7 px-10 text-base">
            Оставить заявку
          </ButtonPrimary>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[650px]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-black">
            Оставьте заявку
          </DialogTitle>
          <DialogDescription className="text-lg">
            Свяжемся с вами в течении 5 минут!
          </DialogDescription>
        </DialogHeader>

        <div className="mb-3">
          <PatternFormat
            format="+7 (###) ### ## ##"
            mask="_"
            placeholder="+7 (999) 999 99 99"
            customInput={LocalNumberInput}
          />
        </div>

        <DialogFooter>
          <ButtonPrimary className="py-8 font-bold w-full text-lg">
            Оставить заявку
          </ButtonPrimary>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
