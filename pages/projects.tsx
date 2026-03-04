import React from 'react';
import { Header, ProjectCard } from '../components';
import { projectsData } from '../constants';

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

        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
      </div>

    </div>
  )
}

export default projects