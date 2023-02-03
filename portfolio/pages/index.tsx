import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components';

export default function Home() {
  return (
    <body className="bg-[#14182c] h-screen text-white">
      <Header />

      <div className="flex justify-center">
        <div className="flex flex-col max-w-screen-sm">
          <div className="py-8">
            <h1 className="font-display text-5xl py-8">A software developer passionate about building beautiful, user-friendly web and mobile applications</h1>
            <p className="text-2xl">
              👋 Hi I'm Li-Ting, a design-focused developer based in Adelaide, Australia.
            </p>
            <p className="text-xl pt-8">
              View Profile  →
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-2xl">Selected work</h2>
          </div>
        </div>
      </div>
    </body >
  )
}
