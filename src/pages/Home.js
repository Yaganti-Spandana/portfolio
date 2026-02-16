import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Projects from '../components/Projects';
import ContactForm from '../components/ContactForm';

function Home(){
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <ContactForm/>
    </div>
  );
}

export default Home;

