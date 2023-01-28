/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Link, graphql, Script } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import rehypeReact from "rehype-react"
import { RiTimerLine, RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri"
import { MdList } from "react-icons/md"
import { FaTags } from "react-icons/fa"
import { BsFillCalendarFill } from "react-icons/bs"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Counter from "../components/Counter"
import SiteTags from "../components/SiteTags"
import SiteCategory from "../components/SiteCategories"
import Bio from "../components/Bio"
import Checked from "../components/Checkbox"
import Stars from "../components/Stars"
import Callout from "../components/Callout"
import CalloutDanger from "../components/Callout/CalloutDanger"
import CalloutLabel from "../components/Callout/CalloutLabel"
import WavyHr from "../components/WavyHr"
import Center from "../components/Center"
import CenterItem from "../components/CenterItem"
import List from "../components/List"
import ListItem from "../components/List/ListItem"
import ListGrid from "../components/ListGrid"
import CloudinaryVideo from "../components/CloudinaryVideo"
import VideoOne from "../components/CloudinaryVideo/videoOne"
import VideoTwo from "../components/CloudinaryVideo/videoTwo"
import VideoThree from "../components/CloudinaryVideo/videoThree"
import Accordion from "../components/Accordion"
import SingleAccordion from "../components/SingleAccordion"
import Section from "../components/Section"
import Popper from "../components/Popper"
import Left from "../components/Left"
import LeftText from "../components/LeftText"
import ColumnGridTwo from "../components/ColumnGridTwo"
import ColumnGridThree from "../components/ColumnGridThree"
import VideoWrapper from "../components/VideoWrapper"
import UserProfile from "../components/UserProfile"

require("prismjs")
require("prismjs/themes/prism-okaidia.css")

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    counter: Counter,
    tags: SiteTags,
    categories: SiteCategory,
    checked: Checked,
    center: Center,
    centerItem: CenterItem,
    wavyHr: WavyHr,
    callout: Callout,
    calloutDanger: CalloutDanger,
    calloutLabel: CalloutLabel,
    list: List,
    listItem: ListItem,
    listGrid: ListGrid,
    cloudinaryVideo: CloudinaryVideo,
    videoOne: VideoOne,
    videoTwo: VideoTwo,
    videoThree: VideoThree,
    accordion: Accordion,
    singleAccordion: SingleAccordion,
    section: Section,
    popper: Popper,
    left: Left,
    leftText: LeftText,
    columnGridTwo: ColumnGridTwo,
    columnGridThree: ColumnGridThree,
    userProfile: UserProfile,
    videoWrapper: VideoWrapper,
  },
}).Compiler

const styles = {
  "article blockquote": {
    "background-color": "cardBg",
  },
  pagination: {
    a: {
      color: "muted",
      "&.is-active": {
        color: "text",
      },
      "&:hover": {
        color: "#918080",
      },
    },
  },
}

const Pagination = props => (
  <div className="pagination -post" sx={styles.pagination}>
    <ul>
      {props.previous && props.previous.frontmatter.template === "blog-post" && (
        <li>
          <Link to={props.previous.frontmatter.path} rel="prev">
            <p
              sx={{
                color: "muted",
              }}
            >
              <span className="icon -left">
                <RiArrowLeftLine />
              </span>{" "}
              Previous
            </p>
            <span className="page-title">
              {props.previous.frontmatter.title}
            </span>
          </Link>
        </li>
      )}
      {props.next && props.next.frontmatter.template === "blog-post" && (
        <li>
          <Link to={props.next.frontmatter.path} rel="next">
            <p
              sx={{
                color: "muted",
              }}
            >
              Next{" "}
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

const BlogPostTemplate = ({ data, pageContext }) => {
  const { markdownRemark } = data /* data.markdownRemark holds your post data */
  const { frontmatter, htmlAst, excerpt } = markdownRemark
  const postNode = data.markdownRemark
  const url = typeof window !== "undefined" ? window.location.href : ""
  const Image = frontmatter.featuredImage
    ? postNode.frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  const { previous, next } = pageContext

  let props = {
    previous,
    next,
  }

  const tags = frontmatter.tags || []
  let taglist = "Tags: "
  if (tags.length > 0) {
    taglist += tags.join(", ")
  }

  return (
    <Layout className="page">
      <Seo
        title={frontmatter.title}
        description={
          frontmatter.description ? frontmatter.description : excerpt
        }
        image={Image}
        url={url}
        article={true}
      />
      <Script>
        <link rel="canonical" href={url} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description} />
        <meta property="twitter:title" content={frontmatter.title} />
        <meta name="twitter:image:alt" content={frontmatter.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:description"
          content={frontmatter.description}
        />
      </Script>
      <article className="blog-post">
        <Stars />
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
            <div>
              <span className="icon -calendar">
                <BsFillCalendarFill size="0.7em" />
              </span>
              &ensp;
              <time sx={{ color: "muted" }}>{frontmatter.date}</time>
              &ensp;
              <span
                sx={{
                  color: "muted",
                }}
              >
                <span className="icon -timer">
                  <RiTimerLine size="0.8em" />
                </span>{" "}
                <small sx={{ color: "muted" }}>
                  {postNode.timeToRead} min read
                </small>
              </span>
            </div>
            {tags.length > 0 && (
              <div
                sx={{
                  color: "muted",
                }}
              >
                <span className="icon -tags">
                  <FaTags size="0.8em" />
                </span>{" "}
                <span>
                  <Link aria-label="Tags" to="/tags/">
                    <small>{taglist}</small>
                  </Link>
                </span>
                &ensp;
                <span className="icon -category">
                  <MdList size="1.1em" />
                </span>{" "}
                <span>
                  <Link aria-label="Categories" to="/categories/">
                    <small>Categories: {frontmatter.category}</small>
                  </Link>
                </span>
              </div>
            )}
          </section>
          {Image ? (
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="cover"
            />
          ) : (
            ""
          )}
        </header>
        <Bio />
        <div className="blog-post-content">{renderAst(htmlAst)}</div>
      </article>
      {(previous || next) && <Pagination {...props} />}
    </Layout>
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
        tags
        category
        title
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
