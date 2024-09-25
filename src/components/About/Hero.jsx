import heroPicture from "../../assets/my-picts.jpg";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  return (
    <div className="lg:mb-35 mb-12">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-500 via-slate-600 to-purple-700 bg-clip-text tracking-tight text-transparent text-4xl text-center lg:text-left"
          >
            Fullstack Developer
          </motion.span>
          <motion.p
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter lg:text-justify "
          >
            My name is Lucky Churnianto Wibowo. I am a passionate full stack
            developer with a knack for crafting robust and scalable web
            applications. With 2 years of hands-on experience, I have honed my
            skills in front-end technologies like React and Next.js, as well as
            back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB.
            My goal is to leverage my expertise to create innovative solutions
            that drive business growth and deliver exceptional user experiences.
          </motion.p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="w-full h-[480px] lg:w-[480px] lg:h-80 bg-slate-200 overflow-hidden">

            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
