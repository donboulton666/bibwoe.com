/** @jsx jsx */
import * as React from 'react'
import { jsx, Heading } from 'theme-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import { FaTags } from 'react-icons/fa'
import { ForwardRefComponent } from 'framer-motion'

interface SiteTagsProps {
  label: string
  src?: string
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  tagsTitle: string
  group: []
}

const SiteTags = ({ group, ...rest }: SiteTagsProps) => {
  const { tagsTitle = `Posts Tags` } = rest
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  return (
      <div>
        <Heading as="h3">
          <FaTags />
          {tagsTitle}
        </Heading>
        <nav
          className="nav-scroll"
          sx={{
            background: '#111',
          }}
        >
          <div>
            <ul className="taglist field is-grouped is-grouped-multiline">
              {data.allMarkdownRemark.group.map((tag: { fieldValue: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.Key | null | undefined; totalCount: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => (
                <li className="control menu-item" key={tag.fieldValue}>
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    <div className="tags has-addons is-large">
                      <span aria-label="Tag" className="tag is-primary">
                        {tag.fieldValue}
                      </span>
                      <span aria-label="Tag Count" className="tag is-dark">
                        {tag.totalCount}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
  )
}

export default SiteTags
