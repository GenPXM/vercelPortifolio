import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { DiDotnet } from "react-icons/di"
import {motion} from "framer-motion"

const iconVariants =(duration) => ({
    initial: {y: -10},
    animate: {
        y:[10, -10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeaType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <section id = "technologies">
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        </section>
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiDotnet className="text-7xl text-purple-800"></DiDotnet>
            </motion.div>
            
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl"></TbBrandNextjs>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-red-700"></SiMongodb>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-700"></FaNodeJs>
            </motion.div>
        </motion.div>
    </div>
    
  )
}

export default Technologies