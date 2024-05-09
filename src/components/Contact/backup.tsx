"use client";
import { useAppSelector } from "@/lib/redux/store";
import AnimateSection from "../ui/Animated/AnimateSection";

import TitleSection from "../TitleSection";
import SubTitle from "../SubTitle";
import Form from "./Form";
import MediaLinks from "./MediaLinks";
import { Bounce, ToastContainer } from "react-toastify";

export default function Contact() {
  const { socialMediaList } = useAppSelector((state) => state.dataTemplate);

  return (
    <section
      id="contact"
      className="relative mx-0 my-4 lg:mx-auto lg:h-full lg:max-w-[85rem] lg:px-6"
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
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
            <Form />
          </AnimateSection>
        </div>
      </div>
    </section>
  );
}
