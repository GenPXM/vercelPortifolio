import Navbar from "./Componentes/Navbar"
import Hero from "./Componentes/Hero"
import About from "./Componentes/About"
import Technologies from "./Componentes/Technologies"
import Experience from "./Componentes/Experience"
import Projects from "./Componentes/Projects"
import Contact from "./Componentes/Contact"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      <div className="fixed top-0 left-0 w-full h-full -z-10"></div>
      <div className="absolute inset-0 -z-10 w-full h-full bg-gradient-to-b from-black to-blue-800"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience/>
      {/* <Projects/> */}
      <Contact/>
    </div>
  );
}

export default App;
