import Link from "next/link";
import { IoDocument, IoPaperPlane } from "react-icons/io5";
import Button from "./Button";

import { SparklesCore } from "../ui/AnimatedComponents/Sparkles";
import AnimateParagraph from "../ui/Animated/AnimateParagraph";
import AnimateSection from "../ui/Animated/AnimateSection";

// import resumeDocs from "/public/files/resume-2024.pdf";

export default function HeroTest() {
  return (
    <section className="relative flex h-[48rem] items-center justify-center lg:mx-16 lg:min-h-screen">
      <div>
        <div className="absolute inset-0 z-0 h-full w-full">
          <SparklesCore
            background="transparent"
            minSize={0.2}
            maxSize={1}
            particleDensity={100}
            className="h-full w-full"
            particleColor="#219ebc"
          />
        </div>

        <AnimateParagraph
          className="w-full text-center text-[2.5rem] font-bold leading-10 text-grey100 dark:text-white100 lg:max-w-5xl lg:text-[4rem] lg:leading-[4.875rem]"
          text="A front-end developer bringing your ideas into life."
          once={true}
        />

        <AnimateSection customDelay={2}>
          <div className="relative z-20 mt-5 flex flex-wrap justify-center gap-4">
            <Link
              href={"/files/resume-2024.pdf"}
              download="Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button name="Download CV">
                <IoDocument className="text-white" />
              </Button>
            </Link>

            <Link href="#contact">
              <Button name="Hire Me">
                <IoPaperPlane className="text-white" />
              </Button>
            </Link>
          </div>
        </AnimateSection>
      </div>
    </section>
  );
}
