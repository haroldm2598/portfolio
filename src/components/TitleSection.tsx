import { loraSoftSemibold } from "@/lib/fonts";
import { cn } from "@/utils/cn";

export default function TitleSection({ title }: { title: string }) {
  return (
    <h1
      className={cn(
        "text-grey100 dark:text-blue100 mb-4 text-[3.5rem] uppercase opacity-80 lg:text-[4rem]",
        loraSoftSemibold.className,
      )}
    >
      {title}
    </h1>
  );
}
