import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


type Props = {
  title: string,
  description: string
}

const ProjectCard = ({ title, description }: Props) => {
  return (
    <div className="flex gap-4 pb-6">
      <div className="flex-1 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"></div>
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="my-4 font-light">
          {description}
        </p>
        <p>
          <Link href="/">Read more →</Link>
        </p>
      </div>
    </div>
  )
}

export default ProjectCard