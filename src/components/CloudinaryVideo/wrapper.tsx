import * as React from 'react'
import { ReactNode } from 'react'

interface WrapperProps {
  children: ReactNode
}


const Wrapper = ({ children }: WrapperProps) => {
  return <div className="wrapper">{children}</div>
}

export default Wrapper
