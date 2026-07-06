import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <FloatingNav />
      <main>
        <Hero />
        <Overview />
        <Experience />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
