import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


type Props = {
  image: string,
  title: string,
  description: string
}

const ProjectCard = ({ image, title, description }: Props) => {
  return (
    <div className="flex gap-4 pb-6">
      <div className="flex-1 relative max-w-lg bg-top">
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
        <p>
          <Link href="/">Read more →</Link>
        </p>
      </div>
    </div>
  )
}

export default ProjectCard