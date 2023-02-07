import React from 'react';
import { Header, ProjectCard } from '../components';

type Props = {}

const projects = (props: Props) => {
  return (
    <div>
      <Header />

      <div className="flex flex-col mx-auto max-w-xl pt-16">
        <h1 className="font-display text-5xl py-8">Projects</h1>

        <p className="text-2xl mb-[5%]">
          🔨 Recent and past projects
        </p>

        <ProjectCard image={"/metaverse.png"} title={"Metaverse"} description={"A metaverse-themed landing page with animation effect and responsive design."} />
        <ProjectCard image={"/succulent.png"} title={"The Succulent's World"} description={"An eCommerce shop for the Succulent's lovers."} />
      </div>

    </div>
  )
}

export default projects