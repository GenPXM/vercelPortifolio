import logo from "../assets/logoGenilson.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" /> 
      </div>
      <div className="flex items-center justify-center gap-8 text-lg">
        <a href="#about-me" className="hover:text-gray-600">About Me</a>
        <a href="#technologies" className="hover:text-gray-600">Technologies</a>
        <a href="#experience" className="hover:text-gray-600">Experience</a>
        <a href="#get-in-touch" className="hover:text-gray-600">Get in Touch</a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/genilson-peixoto-de-miranda-de-souza-0bb3a8220" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/GenPXM" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/genilsonpeixoto90" target="_blank" rel="noopener noreferrer">
          <FaSquareInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
