import About from '@/components/About';
import Contact from '@/components/Contact';
import Main from '@/components/Main';
import MenuNav from '@/components/MenuNav';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <MenuNav />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
