import { useState } from "react";
import logo from "../assets/logoGenilson.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones para o menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>

      {/* Ícone de "sandwich" */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Links da navbar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full lg:flex lg:w-auto lg:items-center lg:justify-center gap-8 text-lg`}
      >
        <a href="#about-me" className="block lg:inline-block hover:text-gray-600">
          About Me
        </a>
        <a href="#technologies" className="block lg:inline-block hover:text-gray-600">
          Technologies
        </a>
        <a href="#experience" className="block lg:inline-block hover:text-gray-600">
          Experience
        </a>
        <a href="#get-in-touch" className="block lg:inline-block hover:text-gray-600">
          Get in Touch
        </a>
      </div>

      {/* Ícones sociais */}
      <div className="hidden lg:flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/genilson-peixoto-de-miranda-de-souza-0bb3a8220"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/GenPXM" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/genilsonpeixoto90"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
