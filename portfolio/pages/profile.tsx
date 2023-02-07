import React from 'react';
import { Header } from '../components';

type Props = {}

const profile = (props: Props) => {
  return (
    <div>
      <Header />

      <div className="flex flex-col mx-auto max-w-xl pt-16">
        <h1 className="font-display text-5xl py-8">Profile</h1>

        <p className="text-xl mb-[5%]">
          Hi there! 👋
          <br></br>
          <br></br>
          I'm Li-Ting, a software developer and a graduate student at The University of Adelaide. I am currently located in Adelaide and actively engaged in various side projects to apply my theoretical knowledge.
          <br></br>
          <br></br>
          I am especially enthusiastic about creating user-friendly web and mobile applications and have had the privilege of collaborating with exceptional teams in these areas.
        </p>
      </div>

    </div>
  )
}

export default profile