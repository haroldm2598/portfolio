import Wrapper from "@/components/Wrapper";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Project/Projects";

export default function page() {
  return (
    <div>
      <Wrapper>
        <Hero />
      </Wrapper>

      <Wrapper className="dark:bg-black100 bg-white">
        <About />
      </Wrapper>

      <Wrapper>
        <Projects />
      </Wrapper>

      <Wrapper className="dark:bg-black100 bg-white">
        <Contact />
      </Wrapper>
    </div>
  );
}
