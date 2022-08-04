import * as React from 'react'
import * as CSS from 'csstype'
import { CalloutProps } from './types'
import { getVariantIcon } from '../../util/utils'

export const callOutWrapper: CSS.Properties = {
  ['--icon-color' as info]: '#9333ea',
  ['--icon-color' as danger]: '#fa383826',
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-20px',
  borderRadius: '50%',
  padding: '6px',
  color: '#9333ea',
  border: '6px solid transparent',
  background: '#141936',

  variants: {
    variant: {
      info: {
        '--icon-color': 'info',
      },
      danger: {
        '--icon-color': 'danger',
      },
    },
  },
}

export const calloutLabelWrapper: CSS.Properties = {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-8px',
  borderRadius: '6px',
  padding: '8px',
  color: '#fff',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  userSelect: 'none',
  background: '#282A36',

  variants: {
    variant: {
      info: {
        background: '#282A36',
      },
      danger: {
        background: '#fa383826',
      },
    },
  },
}

const callout: CSS.Properties = {
  '*:last-child': {
    marginBottom: '0px',
  },

  position: 'relative',
  padding: '10px 25px',
  marginBottom: '2.25rem',
  marginTop: '2.25rem',
  borderRadius: '12px',
  fontSize: '1.25em',
  color: '#fff',
  border: '2px solid rgb(147, 51, 234, 0.5)',
  background: '#282A36',
  boxShadow: '6px 5px 5px rgb(147, 51, 234, 0.75)',
  opacity: '0.6',

  variants: {
    variant: {
      info: {
        background: '#9333ea',
      },
      danger: {
        background: '#fa383826',
      },
    },
  },
}

const Callout: React.FC<CalloutProps> = props => {
  const { children, variant, label, ...rest } = props
  const icon = label ? null : getVariantIcon(variant)

  return (
    <div style={callout} variant={variant} {...rest}>
      {icon ? (
        <aside style={callOutWrapper} variant={variant}>
          {icon}
        </aside>
      ) : null}
      {label ? (
        <aside style={calloutLabelWrapper} variant={variant}>
          {label}
        </aside>
      ) : null}
      {children}
    </div>
  )
}

export default Callout
