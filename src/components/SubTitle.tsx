import { loraSoftMedium } from "@/lib/fonts";
import { cn } from "@/utils/cn";

export default function SubTitle({ title }: { title: string }) {
  return (
    <h1
      className={cn(
        "mb-4 text-4xl text-veryDarkGray opacity-70 dark:text-darkModeBlue",
        loraSoftMedium.className,
      )}
    >
      {title}
    </h1>
  );
}
