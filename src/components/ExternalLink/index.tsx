import * as React from 'react'
import { FC } from 'react'
import { Link, LinkProps } from 'theme-ui'

export type ExternalLinkProps = LinkProps

/**
 * Anchor link to an external url,
 * adds the default `target="_blank" rel="noopener noreferrer"` props.
 */
const ExternalLink: FC<ExternalLinkProps> = props => (
  <Link {...(props as LinkProps)} target="_blank" rel="noopener noreferrer" />
)

export default ExternalLink
