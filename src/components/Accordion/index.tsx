import * as React from 'react'
import { ReactNode, FC } from 'react'
import * as CSS from 'csstype'
import { Disclosure, DisclosurePanel, DisclosureButton } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useInView } from 'react-intersection-observer'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('../FramerFeatures').then(res => res.default)

interface AccordionProps {
  children: ReactNode
  label: string
  src?: string
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
}

export const AccordionWrapper: CSS.Properties = {
  display: 'flex',
  width: 'full',
  top: '2px',
  right: '2px',
}
export const AccordionWrapperRound: CSS.Properties = {
  display: 'flex',
  borderRadius: '10px',
  backgroundColor: '#0f172a',
  top: '2px',
  right: '2px',
}
export const ChevronDown: CSS.Properties = {
  width: '20px',
  height: '20px',
  color: '#ffffff',
}
export const AccordionWrapperbutton: CSS.Properties = {
  display: 'flex',
  backgroundColor: '#0f172a',
  color: '#ffffff',
  borderRadius: '10px',
  justifyItems: 'between',
  font: 'medium',
  top: '2px',
  right: '2px',
}
export const AccordionWrapperbuttonLabel: CSS.Properties = {
  font: 'large',
  color: '#ffffff',
}

export const AccordionWrapperbuttonPanel: CSS.Properties = {
  font: 'medium',
  color: '#ffffff',
  paddingBottom: '4px',
  paddingTop: '4px',
  backgroundColor: '#0f172a',
}

const Accordion: FC<AccordionProps> = (props) => {
  const { children, label } = props
  const singleAccordionContainer = {
    enter: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }
  const [ref, isVisible] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -200,
    },
  }
  return (
    <LazyMotion features={loadFeatures}>
      <m.section className="font-sans" variants={singleAccordionContainer}>
        <div style={AccordionWrapper}>
          <m.div
            ref={ref}
            variants={variants}
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div style={AccordionWrapper}>
              <div style={AccordionWrapperRound}>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <DisclosureButton style={AccordionWrapperbutton}>
                        <span style={AccordionWrapperbuttonLabel}>{label}</span>
                        <ChevronDownIcon
                          style={ChevronDown}
                        />
                      </DisclosureButton>
                      <DisclosurePanel style={AccordionWrapperbuttonPanel}>{children}</DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </m.div>
        </div>
      </m.section>
    </LazyMotion>
  )
}

export default Accordion
