/** @jsx jsx */
/* eslint-disable no-unused-vars */
import * as React from 'react'
/* eslint-enable no-unused-vars */
import { jsx, Container, Heading } from 'theme-ui'
import PropTypes from 'prop-types'
import { MdList } from 'react-icons/md'
import { Link, graphql, HeadProps } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Stars from '../components/Stars'

import OGImage from '../../static/assets/category.jpg'
import defaultImage from '../../static/assets/category.jpg'

const Category = ({ pageContext, data }) => {
  const { category } = pageContext
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `${totalCount} post${totalCount === 1 ? '' : 's'} categorized with “${category}”`

  return (
    <Layout className="not-found-page">
      <div className="left-beams">
        <div className="wrapper">
          <Stars />
          <Container
            p={4}
            bg="primary"
            sx={{
              borderRadius: '12px',
            }}
          >
            <Heading as="h2">{categoryHeader}</Heading>
            <div>
              <ul className="tagsPage">
                {edges.map(({ node }) => {
                  const { slug } = node.fields
                  const { title } = node.frontmatter
                  return (
                    <li key={slug}>
                      <Link to={slug}>{title}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <span className="icon -category">
                <MdList />
              </span>{' '}
              <Link to="/categories">All Categories</Link>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  )
}

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Category

export const pageQuery = graphql`
  query ($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            author
            path
            description
          }
        }
      }
    }
  }
`

export function Head(props: HeadProps) {
  const ogimage = {
    src: OGImage,
    width: 1400,
    height: 531,
  }
  return (
    <>
      <Seo
        type="page"
        title="Category"
        description="Basic Instructions Books While On Earth Category Page."
        image={ogimage}
        pathname="/"
      />
      <meta name="robots" content="index" />
      <link href="https://github.com/donaldboulton" rel="me" />
      <link href="https://twitter.com/donboulton" rel="me" />
      <link href="https://facebook.com/don.boulton" rel="me" />
      <link href="https://www.instagram.com/boulton3662" rel="me" />
      <link href="https://www.linkedin.com/donboulton" rel="me" />
      <link href="mailto:donaldboulton@gmail.com" rel="me" />
      <link rel="robots" href="https://bibwoe.com/robots.txt" />
      <link rel="webmention" href="https://webmention.io/bibwoe.com/webmention" />
      <link rel="pingback" href="https://webmention.io/bibwoe.com/xmlrpc" />
      <link rel="canonical" href="https://bibwoe.com/category" />
      <meta property="og:url" content="https://bibwoe.com/category" />
      <meta property="og:title" content="Bibwoe Category" />
      <meta property="og:description" content="Basic Instructions Books While On Earth" />
      <meta name="twitter:image:alt" content="Category" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Bibwoe Category" />
      <meta property="twitter:description" content="Basic Instructions Books While On Earth. ABout Page" />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Bibwoe Category Page',
          alternativeHeadline: 'At Bibwoe we publish logic and Gods truth',
          image: ogimage,
          award: 'Best Category page ever built',
          editor: 'Donald Boulton',
          genre: 'search engine optimization',
          keywords: 'category, logic, god',
          wordCount: '1120',
          publisher: 'Bibwoe',
          url: 'https://bibwoe.com',
          datePublished: '2020-09-20',
          dateCreated: '2020-08-20',
          dateModified: '2022-08-16',
          description: 'We love to do stuff to help people',
          articleBody: 'You can paste your entire post in here, and yes it can get really really long.',
          author: {
            '@type': 'Person',
            name: 'Donald W. Boulton',
            url: 'https://donboulton.com',
          },
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          category: {
            '@id': 'https://bibwoe.com',
          },
          audience: 'public',
          abstract:
            'Bibwoe, Basic Instructions Books While on Earth has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
          author: {
            '@id': 'https://donboulton.com',
          },
          copyrightHolder: {
            '@id': 'https://bibwoe.com',
          },
          copyrightYear: 2023,
          creator: {
            '@id': 'https://bibwoe.com',
          },
          description:
            'Bibwoe, Basic Instructions Books While on Earth, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
          image: {
            '@type': 'ImageObject',
            url: ogimage,
            width: '1400',
            height: '450',
          },
          inLanguage: 'en',
          name: 'Bibwoe',
          publisher: {
            '@id': 'https://bibwoe.com',
          },
          url: 'https://bibwoe.com/category',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://query.bibwoe.com/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Bibwoe Category Page',
          url: 'https://bibwoe.com/category',
          image: {
            '@type': 'ImageObject',
            url: ogimage,
            width: '1400',
            height: '450',
          },
          publisher: {
            '@type': 'Bibwoe',
            name: 'Bibwoe Category',
          },
          license: 'http://publiuslogic.com/blog/0bsd-licence',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          description: 'Breadcrumbs list',
          itemListElement: [
            {
              '@type': 'ListItem',
              item: {
                '@id': 'https://bibwoe.com',
                name: 'Bibwoe',
              },
              position: '1',
            },
            {
              '@type': 'ListItem',
              item: {
                '@id': 'https://bibwoe.com/category',
                name: 'Category',
              },
              position: '2',
            },
          ],
          numberOfItems: '2',
          name: 'Breadcrumbs',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@id': 'https://bibwoe.com/category',
          '@type': 'Organization',
          address: 'OKC, Middle Earth',
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'donaldboulton@gmail.com',
            telephone: '+405-863-2165',
          },
          description:
            'Bibwoe Basic Instructions Books While on Earth, has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten category, as you only live in the Flesh. Your Soul and Spirit you deny.',
          email: 'donaldboulton@gmail.com',
          founder: {
            '@id': 'https://donboulton.com',
          },
          location: 'OKC, Middle Earth',
          image: {
            '@type': 'ImageObject',
            url: ogimage,
            width: '1400',
            height: '450',
          },
          logo: {
            '@type': 'ImageObject',
            url: 'data:image/png;base64,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',
          },
          name: 'Bibwoe',
          sameAs: [
            'mailto:donaldboulton@gmail.com',
            'tel:+405-863-2165',
            'https://www.facebook.com/donboulton',
            'https://www.instagram.com/boulton3662',
            'https://twitter.com/donboulton',
            'https://www.linkedin.com/donboulton',
            'https://github.com/donaldboulton/',
          ],
          url: 'https://bibwoe.com/category',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': 'https://donboulton.com',
          name: 'Donald Boulton',
          url: 'https://donboulton.com',
          worksFor: {
            '@id': 'https://bibwoe.com',
          },
        })}
      </script>
      <title>Category</title>
      <link rel="sitemap" type="application/xml" title="Sitemap" href="https://bibwoe.com/sitemap.xml" />
      <link rel="rss" type="application/rss+xml" title="Rss" href="https://bibwoe.com/rss.xml" />
    </>
  )
}
