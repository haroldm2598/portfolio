import { MediaLinksProps } from "@/lib/types/definition";
import AnimeStaggered from "../ui/Animated/AnimeStaggered";

interface TSProps {
  data: Array<MediaLinksProps>;
}

export default function MediaLinks({ data }: TSProps) {
  return (
    <>
      {data.map((socialItem, index) => {
        const { Icon, socmedName, path } = socialItem;
        return (
          <AnimeStaggered key={index} custom={2 + index}>
            <div className="flex items-center gap-2">
              <Icon size={40} className="dark:text-white" />
              <div>
                <h1 className="font-semibold dark:text-white">{socmedName}</h1>
                <span className="dark:text-white">{path}</span>
              </div>
            </div>
          </AnimeStaggered>
        );
      })}
    </>
  );
}
