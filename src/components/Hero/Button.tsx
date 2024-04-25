import React, { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps {
  name: string;
  children: ReactNode;
}

export default function Button({ name, children }: ButtonProps) {
  return (
    <button
      className={cn(
        "btn cursor-pointer border-transparent bg-veryBlue px-4 py-2 text-lg font-semibold text-white",
      )}
    >
      {name} {children}
    </button>
  );
}
