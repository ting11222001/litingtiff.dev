import React from 'react'

type Props = {}

function Footer({ }: Props) {
  return (
    <div className="flex mx-auto max-w-xl justify-between mt-10 border-t border-slate-500">
      <p className="text-sm mt-5 text-slate-400">© Copyright 2023 Li-Ting Liao. All rights reserved.</p>
    </div>
  )
}

export default Footer