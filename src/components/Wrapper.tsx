import { cn } from "@/utils/cn";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};
export default function Wrapper({ children, className }: WrapperProps) {
  return <div className={cn("p-5", className)}>{children}</div>;
}
