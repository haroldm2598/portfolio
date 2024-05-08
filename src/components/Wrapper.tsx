import { WrapperProps } from "@/lib/types/definition";
import { cn } from "@/utils/cn";

export default function Wrapper({ children, className }: WrapperProps) {
  return <div className={cn("p-5", className)}>{children}</div>;
}
