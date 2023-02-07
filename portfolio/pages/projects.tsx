import React from 'react';
import { Header, ProjectCard } from '../components';

type Props = {}

const projects = (props: Props) => {
  return (
    <div>
      <Header />

      <div className="flex flex-col mx-auto max-w-xl pt-16">
        <h1 className="font-display text-5xl py-8">Projects</h1>

        <p className="text-2xl">
          🔨 Recent and past projects
        </p>
      </div>

    </div>
  )
}

export default projects