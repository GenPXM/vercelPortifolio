import aboutImg from "../assets/fotoAbout.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import curriculo from "../assets/CV_Genilson_Peixoto.pdf"; 
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <section id="about-me">
        <h2 className="my-20 text-center text-4xl">
          About <span className="text-neutral-500">Me</span>
        </h2>
      </section>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start">
            <p className="my-2 max-w-xl py-6 text-xl">{ABOUT_TEXT}</p>
            <a
              href={curriculo}
              download="curriculo.pdf"
              className="mt-4 rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-700"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
