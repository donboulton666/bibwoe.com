/** @jsx jsx */ /** @jsxFrag React.Fragment */
import { jsx } from 'theme-ui'
import * as React from 'react'
import type { HeadProps } from 'gatsby'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import rehypeReact from 'rehype-react'
import { RiTimerLine, RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'
import { MdList } from 'react-icons/md'
import { FaTags } from 'react-icons/fa'
import { BsFillCalendarFill } from 'react-icons/bs'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Counter from '../components/Counter'
import SiteTags from '../components/SiteTags'
import SiteCategory from '../components/SiteCategories'
import Bio from '../components/Bio'
import Checked from '../components/Checkbox'
import Callout from '../components/Callout'
import CalloutDanger from '../components/Callout/CalloutDanger'
import CalloutLabel from '../components/Callout/CalloutLabel'
import WavyHr from '../components/WavyHr'
import CloudinaryVideo from '../components/CloudinaryVideo'
import VideoOne from '../components/CloudinaryVideo/videoOne'
import VideoTwo from '../components/CloudinaryVideo/videoTwo'
import VideoThree from '../components/CloudinaryVideo/videoThree'
import Section from '../components/Section'
import Popper from '../components/Popper'
import Accordion from '../components/Accordion'

require('prismjs')
require('prismjs/themes/prism-okaidia.css')

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    Accordion: Accordion,
    counter: Counter,
    tags: SiteTags,
    categories: SiteCategory,
    checked: Checked,
    callout: Callout,
    calloutDanger: CalloutDanger,
    calloutLabel: CalloutLabel,
    cloudinaryVideo: CloudinaryVideo,
    videoOne: VideoOne,
    videoTwo: VideoTwo,
    videoThree: VideoThree,
    section: Section,
    popper: Popper,
  },
}).Compiler

const styles = {
  'article blockquote': {
    'background-color': 'cardBg',
  },
  pagination: {
    a: {
      color: 'muted',
      '&.is-active': {
        color: 'text',
      },
      '&:hover': {
        color: '#918080',
      },
    },
  },
}

const Pagination = props => (
  <div className="pagination -post" sx={styles.pagination}>
    <ul>
      {props.previous && props.previous.frontmatter.template === 'blog-post' && (
        <li>
          <Link to={props.previous.frontmatter.path} rel="prev">
            <p
              sx={{
                color: 'muted',
              }}
            >
              <span className="icon -left">
                <RiArrowLeftLine />
              </span>{' '}
              Previous
            </p>
            <span className="page-title">{props.previous.frontmatter.title}</span>
          </Link>
        </li>
      )}
      {props.next && props.next.frontmatter.template === 'blog-post' && (
        <li>
          <Link to={props.next.frontmatter.path} rel="next">
            <p
              sx={{
                color: 'muted',
              }}
            >
              Next{' '}
              <span className="icon -right">
                <RiArrowRightLine />
              </span>
            </p>
            <span className="page-title">{props.next.frontmatter.title}</span>
          </Link>
        </li>
      )}
    </ul>
  </div>
)

type DataProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string
        description: string
        author: string
        path: string
        date: string
        featuredImage: string
        imageLink: string
        tags: string[]
        category: string
      }
      excerpt: string
      parent: {
        modifiedTime: string
      }
      timeToRead: string
    }
  }
}

const BlogPostTemplate = ({ data, pageContext }) => {
  const { markdownRemark } = data /* data.markdownRemark holds your post data */
  const { frontmatter, htmlAst, excerpt } = markdownRemark
  const postNode = data.markdownRemark
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const Image = frontmatter.featuredImage ? postNode.frontmatter.featuredImage.childImageSharp.gatsbyImageData : ''
  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }

  const tags = frontmatter.tags || []
  let taglist = 'Tags: '
  if (tags.length > 0) {
    taglist += tags.join(', ')
  }

  return (
    <>
      <Layout className="page">
        <div className="left-beams">
          <article className="blog-post">
            <header className="featured-banner">
              <section className="article-header">
                <h1>{frontmatter.title}</h1>
                <div>
                  <span className="icon -calendar">
                    <BsFillCalendarFill size="0.7em" />
                  </span>
                  &ensp;
                  <time sx={{ color: 'muted' }}>{frontmatter.date}</time>
                  &ensp;
                  <span
                    sx={{
                      color: 'muted',
                    }}
                  >
                    <span className="icon -timer">
                      <RiTimerLine size="0.8em" />
                    </span>{' '}
                    <small sx={{ color: 'muted' }}>{postNode.timeToRead} min read</small>
                  </span>
                </div>
                {tags.length > 0 && (
                  <div
                    sx={{
                      color: 'muted',
                    }}
                  >
                    <span className="icon -tags">
                      <FaTags size="0.8em" />
                    </span>{' '}
                    <span>
                      <Link aria-label="Tags" to="/tags/">
                        <small>{taglist}</small>
                      </Link>
                    </span>
                    &ensp;
                    <span className="icon -category">
                      <MdList size="1.1em" />
                    </span>{' '}
                    <span>
                      <Link aria-label="Categories" to="/categories/">
                        <small>Categories: {frontmatter.category}</small>
                      </Link>
                    </span>
                  </div>
                )}
              </section>
              {Image ? (
                <GatsbyImage image={Image} alt={frontmatter.title + ' - Featured image'} className="cover" />
              ) : (
                ''
              )}
            </header>
            <Bio />
            <div className="blog-post-content">{renderAst(htmlAst)}</div>
          </article>
          <WavyHr />
          {(previous || next) && <Pagination {...props} />}
        </div>
      </Layout>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      excerpt(pruneLength: 148)
      timeToRead
      tableOfContents
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        author
        tags
        category
        title
        description
        imageLink
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      parent {
        ... on File {
          modifiedTime
        }
      }
    }
  }
`

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export function Head(props: HeadProps<DataProps>) {
  const { data, markdownRemark } = props.data
  const siteUrl = 'https://bibwoe.com/'
  const excerpt = props.data.markdownRemark.excerpt
  const imageLink = props.data.markdownRemark.imageLink
  const { frontmatter, htmlAst } = markdownRemark
  const url = typeof window !== 'undefined' ? window.location.href : ''
  return (
    <>
      <Seo
        type="post"
        title={props.data.markdownRemark.frontmatter.title}
        description={props.data.markdownRemark.frontmatter.description}
        image={imageLink}
        pathname={url}
      />
      <title>{props.data.markdownRemark.frontmatter.title}</title>
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
      <meta name="description" content={props.data.markdownRemark.frontmatter.description} />
      <meta name="image" content={imageLink} />
      <meta name="twitter:site" content="@donaldboulton" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.data.markdownRemark.frontmatter.title} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:description" content={props.data.markdownRemark.frontmatter.description} />
      <meta name="twitter:image" content={imageLink} />
      <meta name="twitter:creator" content="@donboulton" />
      <meta name="og:title" content={props.data.markdownRemark.frontmatter.title} />
      <meta name="og:url" content={url} />
      <meta name="og:description" content={props.data.markdownRemark.frontmatter.description} />
      <meta name="og:site_name" content="bibwoe" />
      <meta name="og:image" content={imageLink} />
      <meta name="og:image:title" content={props.data.markdownRemark.frontmatter.title} />
      <meta name="og:image:alt" content={props.data.markdownRemark.frontmatter.title} />
      <meta name="og:image:width" content="1400px" />
      <meta name="og:image:height" content="450px" />
      <meta name="og:updated_time" content={props.data.markdownRemark.parent.modifiedTime} />
      <meta name="canonical" content={url} />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      <link rel="alternate" type="application/rss+xml" title="Rss" href="/rss.xml" />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          about: {
            '@id': 'https://bibwoe.com',
          },
          audience: 'public',
          abstract:
            'Bibwoe has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
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
          description: 'Bibwoe name means to Publish Logic',
          image: {
            '@type': 'ImageObject',
            url: imageLink,
            width: '1400px',
            height: '450px',
          },
          inLanguage: 'en',
          name: 'bibwoe',
          publisher: {
            '@id': 'https://bibwoe.com',
          },
          url: 'https://bibwoe.com',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: props.data.markdownRemark.frontmatter.title,
          url: url,
          image: {
            '@type': 'ImageObject',
            url: imageLink,
            width: '1400',
            height: '450',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Mansbooks.com',
          },
          license: 'http://publiuslogic.com/blog/0bsd-licence',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: props.data.markdownRemark.frontmatter.title,
          alternativeHeadline: props.data.markdownRemark.frontmatter.description,
          mainEntityOfPage: url,
          image: imageLink,
          award: 'Best Blog page ever built',
          editor: props.data.markdownRemark.frontmatter.author,
          genre: 'group',
          keywords: props.data.markdownRemark.frontmatter.tags,
          wordCount: '1120',
          publisher: 'bibwoe',
          url: url,
          datePublished: props.data.markdownRemark.frontmatter.date,
          dateCreated: props.data.markdownRemark.frontmatter.date,
          dateModified: props.data.markdownRemark.parent.modifiedTime,
          description: props.data.markdownRemark.frontmatter.description,
          articleBody: excerpt,
          author: {
            '@type': 'Person',
            name: props.data.markdownRemark.frontmatter.author,
          },
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
                '@id': 'https://bibwoe.com/',
                name: 'Home',
              },
              position: '1',
            },
            {
              '@type': 'ListItem',
              item: {
                '@id': 'https://bibwoe.com/posts/',
                name: 'Blog Posts',
              },
              position: '2',
            },
            {
              '@type': 'ListItem',
              item: {
                '@id': url,
                name: props.data.markdownRemark.frontmatter.title,
              },
              position: '3',
            },
          ],
          numberOfItems: '3',
          name: 'Breadcrumbs',
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@id': 'https://bibwoe.com',
          '@type': 'Organization',
          address: 'OKC, Middle Earth',
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'donaldboulton@gmail.com',
            telephone: '+405-863-2165',
          },
          description: 'Basic Instructions Books while On Earth.',
          email: 'donaldboulton@gmail.com',
          founder: {
            '@id': 'https://donboulton.com',
          },
          location: 'OKC, Middle Earth',
          image: {
            '@type': 'ImageObject',
            url: 'https://bibwoe.com/static/assets/sermon-mount.jpg',
            width: '1400',
            height: '450',
          },
          logo: {
            '@type': 'ImageObject',
            url: 'data:image/png;base64,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',
          },
          name: 'bibwoe',
          sameAs: [
            'mailto:donaldboulton@gmail.com',
            'tel:+405-863-2165',
            'https://www.facebook.com/donboulton',
            'https://www.instagram.com/boulton3662',
            'https://twitter.com/donboulton',
            'https://www.linkedin.com/donboulton',
            'https://github.com/donaldboulton/',
          ],
          url: 'https://bibwoe.com',
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
      <link rel="sitemap" type="application/xml" title="Sitemap" href="https://bibwoe.com/sitemap.xml" />
      <link rel="rss" type="application/rss+xml" title="Rss" href="https://bibwoe.com/rss.xml" />
    </>
  )
}
