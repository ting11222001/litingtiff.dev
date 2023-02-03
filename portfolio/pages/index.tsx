import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components';

export default function Home() {
  return (
    <body className="bg-[#14182c] h-screen text-white">
      <Header />

      <div className="flex justify-center">
        <div className="flex flex-col max-w-screen-sm">
          <div>
            <h1>A web engineer interested in design systems and closing the gap between design and development</h1>
          </div>
          <div>
            <h2>Selected work</h2>
          </div>
        </div>
      </div>
    </body >
  )
}
