import { loraSoftSemibold } from "@/lib/fonts";
import { cn } from "@/utils/cn";

export default function TitleSection({ title }: { title: string }) {
  return (
    <h1
      className={cn(
        "dark:text-blue300 mb-4 text-[3.5rem] uppercase text-grey100 opacity-80 lg:text-[4rem]",
        loraSoftSemibold.className,
      )}
    >
      {title}
    </h1>
  );
}
