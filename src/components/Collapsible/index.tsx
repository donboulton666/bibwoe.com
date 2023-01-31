import * as React from 'react'
import { FC, ReactNode } from 'react'
import AnimateHeight, { AnimateHeightProps } from 'react-animate-height'

export interface CollapsibleOwnProps {
  /**
   * controlled open state
   */
  isOpen: boolean
  children: ReactNode
}

export type CollapsibleProps = CollapsibleOwnProps & AnimateHeightProps

/**
 * Animated expand/collapse container component, using [react-animate-height](https://github.com/Stanko/react-animate-height).
 *
 */
const Collapsible: FC<CollapsibleProps> = ({ children, isOpen, ...rest }) => {
  return (
    <AnimateHeight height={isOpen ? 'auto' : 0} {...rest}>
      {isOpen ? children : ''}
    </AnimateHeight>
  )
}

export default Collapsible
