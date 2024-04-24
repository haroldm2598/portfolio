"use client";
import { useAppSelector } from "@/lib/redux/store";

import AnimateSection from "../ui/Animated/AnimateSection";
import TitleSection from "../TitleSection";
import Card from "./Card";

export default function Projects() {
  const { projectList } = useAppSelector((state) => state.dataTemplate);

  return (
    <section
      id="projects"
      className="mx-0 my-20 lg:mx-auto lg:max-w-[85rem] lg:px-6"
    >
      <AnimateSection>
        <TitleSection title="projects" />
      </AnimateSection>

      <Card data={projectList} />
    </section>
  );
}
