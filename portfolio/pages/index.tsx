import Head from 'next/head';
import Image from 'next/image';
import { Header, ProjectCard, Footer } from '../components';
import Link from 'next/link';

export default function Home() {
  return (
    <body className="bg-[#14182c] h-screen text-white">
      <Header />

      <div className="flex justify-center mb-8">
        <div className="flex flex-col max-w-screen-sm">
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
          <ProjectCard title={"Metaverse"} description={"A metaverse-themed landing page with animation effect and responsive design."} />
          <ProjectCard title={"The Succulent's World"} description={"An eCommerce shop for the Succulent's lovers."} />
          <ProjectCard title={"Uber-Clone"} description={"Build Uber app front-end mobile with key features from scratch."} />
          <p className="text-xl pt-5">
            <Link href="/">View Projects →</Link>
          </p>
        </div>
      </div>

      <Footer />
    </body >
  )
}
