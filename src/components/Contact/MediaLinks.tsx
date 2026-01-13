import Link from "next/link";
import AnimateMediaLinks from "../ui/Animated/AnimateMediaLinks";
import { MediaLinksProps } from "@/lib/types/definition";

interface MediaProps {
  data: Array<MediaLinksProps>;
}

export default function MediaLinks({ data }: MediaProps) {
  return (
    <>
      {data.map((socialItem, index) => {
        const { Icon, socmedName, path, name } = socialItem;
        return (
          <AnimateMediaLinks key={index} custom={2 + index}>
            <div className="flex items-center gap-2">
              <Icon size={40} className="dark:text-white" />
              <div>
                <h1 className="font-semibold dark:text-white">{socmedName}</h1>
                <Link href={path}>
                  <span className="dark:text-white">{name}</span>
                </Link>
              </div>
            </div>
          </AnimateMediaLinks>
        );
      })}
    </>
  );
}
