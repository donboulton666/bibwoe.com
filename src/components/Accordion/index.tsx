import * as React from 'react'
import { FC, ReactNode, useState } from 'react'
import { Container, Button, Box } from 'theme-ui'

interface AccordionProps {
  isOpen: boolean
  children: ReactNode
}

const Accordion: FC<AccordionProps> = props => {
  const { children, ...rest } = props
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Box>
        <Button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'close' : 'open'}</Button>
        <Container isOpen={isOpen} {...rest} easing={'ease-in-out'}>
          {isOpen ? children : ''}
        </Container>
      </Box>
    </>
  )
}

export default Accordion
