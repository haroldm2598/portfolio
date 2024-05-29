"use client";
import Image from "next/image";
import { useAppSelector } from "@/lib/redux/store";
import AnimateSection from "../ui/Animated/AnimateSection";
import AnimateStagger from "../ui/Animated/AnimateStagger";
import TitleSection from "../TitleSection";

export default function AboutTest() {
  const { expertiseList } = useAppSelector((state) => state.dataTemplate);
  console.log(expertiseList);

  return (
    <section
      id="about"
      className="mx-0 min-h-screen py-4 text-grey100 lg:mx-auto lg:max-w-[85rem] lg:px-6"
    >
      <AnimateSection>
        <TitleSection title="about" />
      </AnimateSection>

      <AnimateSection customDelay={2}>
        <p className="mt-5 max-w-[70rem] text-lg leading-8 opacity-80 dark:text-white lg:text-2xl lg:leading-10">
          hey harold mag-isa here. A dedicated front-end developer creating
          stunning, functional website. A user-friendly web experienced who
          loves to develope a website where analytical and problem solving
          provide solutions to your needs.
        </p>
      </AnimateSection>

      <AnimateSection customDelay={3}>
        <h1 className="mt-10 text-[2rem] font-semibold leading-10 dark:text-white">
          Here are my expertise
        </h1>
        <div className="my-10 flex flex-wrap justify-center gap-3 md:justify-start lg:gap-5">
          {expertiseList[0].main.map((item, index) => (
            <AnimateStagger key={index} custom={index}>
              <div
                key={index}
                className="my-2 grid h-[100px] w-[100px] place-items-center rounded-lg border-2 border-[#E1E1E1] bg-white shadow-md"
              >
                <div className="h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]">
                  <Image
                    src={item.imgSrc}
                    className="h-full w-full object-contain"
                    alt="thumbnail"
                  />
                </div>
              </div>
            </AnimateStagger>
          ))}
        </div>
      </AnimateSection>

      <AnimateSection customDelay={4}>
        <h1 className="mt-10 text-[1.5rem] font-medium leading-10 dark:text-white">
          Including but not limited to
        </h1>

        <div className="my-10 flex flex-wrap justify-center gap-3 md:justify-start lg:gap-5">
          {expertiseList[0].sub.map((item, index) => (
            <AnimateStagger key={index} custom={index}>
              <div
                key={index}
                className="my-2 grid h-[100px] w-[100px] place-items-center rounded-lg border-2 border-[#E1E1E1] bg-white shadow-md"
              >
                <div className=" h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]">
                  <Image
                    src={item.imgSrc}
                    className="h-full w-full object-contain"
                    alt="thumbnail"
                  />
                </div>
              </div>
            </AnimateStagger>
          ))}
        </div>
      </AnimateSection>
    </section>
  );
}
