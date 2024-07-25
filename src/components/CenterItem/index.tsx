import * as React from 'react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const CenterItem = ({ children, ...props }: Props) => {
  return (
    <>
      <div className="center items-stretch">
        {children}
      </div>
    </>
  )
}

export default CenterItem
