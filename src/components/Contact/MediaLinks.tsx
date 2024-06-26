import { MediaLinksProps } from "@/lib/types/definition";
import AnimeStaggered from "../ui/Animated/AnimateStagger";
import Link from "next/link";

interface MediaProps {
  data: Array<MediaLinksProps>;
}

export default function MediaLinks({ data }: MediaProps) {
  return (
    <>
      {data.map((socialItem, index) => {
        const { Icon, socmedName, path, name } = socialItem;
        return (
          <AnimeStaggered key={index} custom={2 + index}>
            <div className="flex items-center gap-2">
              <Icon size={40} className="dark:text-white" />
              <div>
                <h1 className="font-semibold dark:text-white">{socmedName}</h1>
                <Link href={path}>
                  <span className="dark:text-white">{name}</span>
                </Link>
              </div>
            </div>
          </AnimeStaggered>
        );
      })}
    </>
  );
}
