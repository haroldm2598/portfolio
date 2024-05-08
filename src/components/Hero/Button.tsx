import { cn } from "@/utils/cn";
import { ButtonProps } from "@/lib/types/definition";

export default function Button({ name, children }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-blue100 btn cursor-pointer border-transparent px-4 py-2 text-lg font-semibold text-white",
      )}
    >
      {name} {children}
    </button>
  );
}
