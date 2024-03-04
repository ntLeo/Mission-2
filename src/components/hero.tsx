import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="flex text-center justify-center h-1/4 w-full bg-gradient-to-br from-blue-700/35 to-blue-700/75">
        <motion.h1  
        initial={{ y: -100,  opacity: 0 }}
        transition={{ delay: 0.2 }}
        animate={{ y: 0,  opacity: 1 }}
        className="absolute text-zinc-100 font-bold text-[4.5rem] mt-20 drop-shadow-lg">Find your dream car for your perfect journey</motion.h1>
    </section>
  )
}
export default Hero