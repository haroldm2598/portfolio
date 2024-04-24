import { loraSoftSemibold } from "@/lib/fonts";
import { cn } from "@/utils/cn";

export default function TitleSection({ title }: { title: string }) {
  return (
    <h1
      className={cn(
        "mb-4 text-[3.5rem] uppercase text-veryDarkGray opacity-80 dark:text-darkBlue lg:text-[4rem]",
        loraSoftSemibold.className,
      )}
    >
      {title}
    </h1>
  );
}
