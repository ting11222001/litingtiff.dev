import React from 'react';
import Link from 'next/link';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="flex mx-auto max-w-xl justify-between pt-5">
      <div>
        <h2>
          <Link href="/">Li-Ting Liao</Link>
        </h2>
      </div>

      <div className="flex flex-row">
        <h2>Profile</h2>
        <h2>
          <Link href="/projects">Projects</Link>
        </h2>
        <h2>Contact</h2>
      </div>
    </div>
  )
}

export default Header