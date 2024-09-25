import { motion } from "framer-motion";

const AboutThisPage = () => {
  return (
    <div className="lg:mb-35 mb-12 mt-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 flex items-center justify-center ">
          <div className="w-full h-[480px] lg:w-[480px] lg:h-80 bg-slate-200 overflow-hidden"></div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl  mb-4">About This Website</h2>
          <div className="flex justify-center lg:justify-start">
            <motion.p
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="my-6 lg:my-0 max-w-xl"
            >
              This website is built with Vite React and styled with Tailwind
              CSS, brings you a seamless and responsive movie browsing
              experience. Powered by the TMDB API, you can easily discover,
              search, and filter through a vast collection of movies from around
              the globe.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThisPage;
