import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { FaTwitter } from 'react-icons/fa'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

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
        width={48}
        height={48}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Built by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <span>
            <OutboundLink  alt="twitter" href={`https://twitter.com/${social?.twitter || ``}`}>
              Follow on Twitter{' '}
              <span className="icon -twitter">
                <FaTwitter className="icon-twitter" />
              </span>
            </OutboundLink>
            <span>
              {' '}
              <svg xmlns="http://www.w3.org/2000/svg" width="106.75" height="28" role="img" aria-label="VIEW: 0">
                <title>VIEW: 0</title>
                <g shape-rendering="crispEdges">
                  <rect width="58.00" height="28" fill="transparent" />
                  <rect x="58.00" width="48.75" height="28" fill="transparent" />
                </g>
                <g
                  fill="#fff"
                  text-anchor="middle"
                  font-family="Verdana,Geneva,DejaVu Sans,sans-serif"
                  text-rendering="geometricPrecision"
                  font-size="100"
                >
                  <text transform="scale(.1)" x="290" y="175" textLength="340" fill="#fff">
                    VIEW
                  </text>
                  <text
                    id="viewCountText"
                    transform="scale(.1)"
                    x="823.75"
                    y="175"
                    textLength="247.5"
                    fill="#fff"
                    font-weight="bold"
                  ></text>
                </g>
              </svg>
            </span>
          </span>
        </p>
      )}
    </div>
  )
}

export default Bio
