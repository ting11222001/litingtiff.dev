import React from 'react';
import Link from 'next/link';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="flex mx-auto max-w-screen-sm justify-between">
      <div>
        Li-Ting Liao
      </div>

      <div className="flex flex-row">
        <h2>Profile</h2>
        <h2>Projects</h2>
        <h2>Contact</h2>
      </div>
    </div>
  )
}

export default Header