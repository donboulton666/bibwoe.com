/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { FaTwitter } from 'react-icons/fa'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={['auto', 'webp']}
        src="../../../static/assets/donald-boulton.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Built by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <span>
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              Don on Twitter{' '}
              <span className="icon -twitter">
                <FaTwitter />
              </span>
            </a>
          </span>
        </p>
      )}
    </div>
  )
}

export default Bio
