import React from 'react'

type Props = {
  year: string,
  title: string,
  duration: string,
  details: string
}

const TimelineItem = ({ year, title, duration, details }: Props) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-stone-900 bg-white rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-white">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal text-gray-400">
          {details}
        </p>
      </li>
    </ol>
  )
}

export default TimelineItem