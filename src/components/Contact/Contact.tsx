"use client";
import { useAppSelector } from "@/lib/redux/store";
import AnimateSection from "../ui/Animated/AnimateSection";

import TitleSection from "../TitleSection";
import SubTitle from "../SubTitle";
import FormMailer from "./FormMailer";
import MediaLinks from "./MediaLinks";

export default function Contact() {
  const { socialMediaList } = useAppSelector((state) => state.dataTemplate);

  return (
    <section
      id="contact"
      className="mx-0 my-4 lg:mx-auto lg:h-full lg:max-w-[85rem] lg:px-6"
    >
      <AnimateSection>
        <TitleSection title="Contact" />
      </AnimateSection>

      <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-0">
        <div className="flex flex-1 flex-wrap gap-10 lg:flex-col">
          <MediaLinks data={socialMediaList} />
        </div>

        <div className="flex-1">
          <AnimateSection customDelay={2}>
            <SubTitle title="Get in touch" />
            <FormMailer />
          </AnimateSection>
        </div>
      </div>
    </section>
  );
}
