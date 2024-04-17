"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { Button as ShadcnButton, ButtonProps } from "../ui/button";
import { twMerge } from "tailwind-merge";

type ButtonType = {
  isLoading?: boolean;
} & ButtonProps;

export const Button = ({
  isLoading,
  disabled,
  className,
  children,
  ...rest
}: ButtonType) => {
  return (
    <ShadcnButton
      {...rest}
      size="lg"
      className={className}
      disabled={isLoading || disabled}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </ShadcnButton>
  );
};

export const ButtonPrimary = React.forwardRef<HTMLInputElement, ButtonType>(
  ({ className, type, ...rest }, ref) => {
    return (
      <Button
        className={twMerge(
          className,
          "bg-primary hover:bg-primaryho text-black"
        )}
        {...rest}
      />
    );
  }
);
