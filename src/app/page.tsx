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

      <Wrapper className="bg-white dark:bg-darkMode100">
        <About />
      </Wrapper>

      <Wrapper>
        <Projects />
      </Wrapper>

      <Wrapper className="bg-white dark:bg-darkMode100">
        <Contact />
      </Wrapper>
    </div>
  );
}
