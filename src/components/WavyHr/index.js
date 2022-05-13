import React from 'react'
import styled from '@emotion/styled'

export const Hr = styled.hr`
  text-center;
  color: var(--primary-color);
`

const WavyHr = () => {
  return (
    <div className="text-center">
      <Hr />
    </div>
  )
}

export default WavyHr
