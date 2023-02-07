import React from 'react';
import { timeline } from '../constants';
import { TimelineItem } from '../components';

type Props = {}

const Timeline = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full">
        {timeline.map(item => (
          <TimelineItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline