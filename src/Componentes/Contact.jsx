import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import myIcon from "../assets/backTop.png"; 
const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <section id="get-in-touch">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >
          Get in Touch
        </motion.h2>
      </section>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
        >
          <a href="#" className="border-b">
            {CONTACT.email}
          </a>
        </motion.p>
      </div>

      <div className="fixed bottom-10 right-10">
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center rounded-full p-3 hover:bg-blue-700"
          aria-label="Scroll to top"
        >
          <img src={myIcon} alt="Scroll to top" className="w-70 h-70" /> 
        </button>
      </div>
    </div>
  );
};

export default Contact;
