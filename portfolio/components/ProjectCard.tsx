/* eslint-disable @next/next/no-img-element */
import React from 'react';

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
    <div className='w-full mx-auto'>
      <div className='md:flex md:pb-4 items-center'>

        <div className="relative h-40 aspect-w-1 aspect-h-1 md:w-[300px] overflow-hidden rounded-md">
          <img
            src={image}
            alt="project image"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className='max-w-[300px] py-4 md:pl-4 md:py-0'>
          <h3 className="font-medium">{title}</h3>
          <p className="my-4 font-light">
            {description}
          </p>


          <div className='flex space-x-4'>
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

      </div >



    </div >


    // <div className="flex gap-4 pb-6">
    //   <div className="flex-1 relative h-40 aspect-w-1 aspect-h-1 w-80 overflow-hidden rounded-md">
    //     <img
    //       src={image}
    //       alt="project image"
    //       className="h-full w-full object-cover object-center lg:h-full lg:w-full"
    //     />
    //   </div>
    //   <div className="flex-1">
    //     <h3 className="font-medium">{title}</h3>
    //     <p className="my-4 font-light">
    //       {description}
    //     </p>

    //     <div className="flex flex-row gap-4">
    //       {github && (
    //         <div className="border-solid border-2 border-slate-500 p-1 rounded-md hover:border-pink-500">
    //           <a href={github}>
    //             GitHub
    //           </a>
    //         </div>
    //       )}
    //       <div className="border-solid border-2 border-slate-500 p-1 rounded-md hover:border-yellow-500">
    //         <a href={demo}>
    //           Demo
    //         </a>
    //       </div>
    //     </div>

    //   </div>
    // </div>
  )
}

export default ProjectCard