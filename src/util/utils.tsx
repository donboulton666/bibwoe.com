import * as React from 'react'
import Alert from '@/components/icons/alert'
import Info from '@/components/icons/info'
import { CalloutVariant } from '../types/index'

export const getVariantIcon = (variant: CalloutVariant): React.ReactNode => {
  switch (variant) {
    case 'info':
      return <Info />
    case 'danger':
      return <Alert />
  }
}
