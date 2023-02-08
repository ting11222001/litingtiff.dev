import React from 'react';
import Image from 'next/image';

type Props = {
  image: string,
  title: string,
  description: string,
  github?: string,
  demo?: string
}

const ProjectCard = ({ image, title, description, github, demo }: Props) => {
  console.log(github);
  return (
    <div className="flex gap-4 pb-6">
      <div className="flex-1 relative">
        <Image
          src={image}
          alt="project image"
          fill // required
          objectFit="cover" // change to suit your needs
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="my-4 font-light">
          {description}
        </p>

        <div className="flex flex-row gap-4">
          {github && (
            <div className="border-solid border-2 border-slate-500 p-1 rounded-md hover:border-pink-500">
              <a href={github}>
                GitHub
              </a>
            </div>
          )}
          <div className="border-solid border-2 border-slate-500 p-1 rounded-md hover:border-yellow-500">
            <a href={demo}>
              Demo
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProjectCard