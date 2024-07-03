import * as React from 'react'
import PropTypes from 'prop-types'
import { Script } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          title
          description
          siteUrl
          siteImage
          social {
            twitter
          }
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata.title
  const defaultImage = site.siteMetadata.siteImage

  return (
    <Script
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `article`,
        },
        {
          property: `og:image`,
          content: defaultImage,
        },
        {
          property: `og:site_name`,
          content: defaultTitle,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author?.name || ``,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  image: ``,
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
