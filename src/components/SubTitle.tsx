import { loraSoftMedium } from "@/lib/fonts";
import { cn } from "@/utils/cn";

export default function SubTitle({ title }: { title: string }) {
  return (
    <h1
      className={cn(
        "text-grey100 dark:text-blue200 mb-4 text-4xl opacity-70",
        loraSoftMedium.className,
      )}
    >
      {title}
    </h1>
  );
}
