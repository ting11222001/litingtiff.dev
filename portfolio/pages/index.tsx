import Head from 'next/head';
import Image from 'next/image';
import { Header, ProjectCard, Footer } from '../components';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex mx-auto max-w-xl pt-16 relative">
        <div className="flex items-center absolute opacity-40 top-0 pt-16">
          <div className="self-start relative top-0 left-0 w-36 h-36 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500 z-40 animate-spin-slow"></div>
          <div className="ml-[-10%] relative top-0 left-0 w-80 h-80 rounded-full bg-gradient-to-b from-green-400 to-blue-500 z-30 animate-spin-slow"></div>
          <div className="ml-[-10%] mt-[10%] self-end relative top-0 left-0 w-56 h-56 rounded-full bg-gradient-to-b from-pink-500 to-yellow-500 z-20 animate-spin-slow"></div>
        </div>

        <div className="flex flex-col justify-content z-50">
          <div className="py-8">
            <h1 className="font-display text-5xl py-8">A software developer passionate about building beautiful, user-friendly web and mobile applications</h1>
            <p className="text-2xl">
              👋 Hi I am Li-Ting, a design-focused developer based in Adelaide, Australia.
            </p>
            <p className="text-xl pt-8">
              <Link href="/">View Profile →</Link>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-2xl pb-8">Selected work</h2>
          </div>
          <ProjectCard image={"/metaverse.png"} title={"Metaverse"} description={"A metaverse-themed landing page with animation effect and responsive design."} />
          <ProjectCard image={"/succulent.png"} title={"The Succulent's World"} description={"An eCommerce shop for the Succulent's lovers."} />
          {/* <ProjectCard image={"/metaverse.png"} title={"Uber-Clone"} description={"Build Uber app front-end mobile with key features from scratch."} /> */}
          <p className="text-xl pt-5">
            <Link href="/">View Projects →</Link>
          </p>
        </div>
      </div>

      <Footer />
    </div >
  )
}
