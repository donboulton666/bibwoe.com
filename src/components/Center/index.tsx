import * as React from 'react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Center = ({ children, ...props }: Props) => {
  return (
    <>
      <div
        className="mb-2 flex justify-center pb-4 text-2xl italic text-fuchsia-800 underline decoration-fuchsia-600 decoration-wavy underline-offset-8 transition duration-300 dark:text-fuchsia-600 dark:decoration-fuchsia-600"
      >
        {children}
      </div>
    </>
  )
}

export default Center
