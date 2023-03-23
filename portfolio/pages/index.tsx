import Head from 'next/head';
import Image from 'next/image';
import { Header, ProjectCard, Footer } from '../components';
import Link from 'next/link';
import { projectsData } from '../constants';
import { motion } from "framer-motion";
import { majorTitleVariants, minorTitleVariants } from '../utils/motion';

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex mx-auto max-w-xl pt-16 relative">
        <div className="flex items-center absolute opacity-40 top-0 pt-16">
          <div className="relative md:top-[-30px] top-0 left-0 w-40 h-40 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 z-40 animate-spin-slow"></div>
          <div className="relative md:top-0 top-[80px] left-[-50px] w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-b from-green-400 to-blue-500 z-30 animate-spin-slow"></div>
          <div className="self-end relative top-0 left-[-120px] md:w-60 md:h-60 rounded-full bg-gradient-to-b from-pink-500 to-yellow-500 z-20 animate-spin-slow"></div>
        </div>

        <div className="flex flex-col justify-content z-50">
          <div className="py-8">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={majorTitleVariants}>
                <h1 className="font-display text-5xl py-8">A software developer passionate about building beautiful, user-friendly web and mobile applications</h1>
              </motion.div>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={minorTitleVariants}>
                <p className="text-2xl">
                  👋 Hi I am Li-Ting, a design-focused developer based in Adelaide, Australia.
                </p>
                <p className="text-xl pt-8">
                  <Link href="/profile">View Profile →</Link>
                </p>
              </motion.div>
            </motion.div>

          </div>

          <div>
            <h2 className="font-semibold text-2xl pb-8">Selected work</h2>
          </div>
          <ProjectCard
            key={projectsData[0].id}
            {...projectsData[0]}
          />
          <ProjectCard
            key={projectsData[1].id}
            {...projectsData[1]}
          />
          <p className="text-xl pt-5">
            <Link href="/projects">View Projects →</Link>
          </p>
        </div>
      </div>

      <Footer />
    </div >
  )
}
