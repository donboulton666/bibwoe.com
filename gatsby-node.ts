import { GatsbyNode } from 'gatsby'
const path = require('path')
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { copyLibFiles } = require('@builder.io/partytown/utils')

exports.onPreBuild = async () => {
  await copyLibFiles(path.join(__dirname, 'static', '~partytown'))
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogList = path.resolve(`./src/templates/blog-list.tsx`)
  const tagTemplate = path.resolve('./src/templates/tags-page.tsx')
  const categoryTemplate = path.resolve('./src/templates/category-page.tsx')

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 1000) {
        edges {
          node {
            id
            excerpt
            fields {
              slug
            }
            headings {
              depth
              value
            }
            frontmatter {
              path
              template
              tags
              category
              title
              description
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
      categoryGroup: allMarkdownRemark(limit: 2000) {
        group(field: { frontmatter: { category: SELECT } }) {
          fieldValue
        }
      }
    }
  `)

  /* Handle errors */
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  /* Create markdown pages */
  const posts = result.data.allMarkdownRemark.edges
  let blogPostsCount = 0

  posts.forEach((post, index) => {
    const id = post.node.id
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.frontmatter.path,
      component: path.resolve(`src/templates/${String(post.node.frontmatter.template)}.tsx`),
      /* additional data can be passed via context */
      context: {
        id,
        previous,
        next,
      },
    })

    let category = []

    /* Iterate through each post, putting all found date fields into `dates` */
    posts.forEach(post => {
      if (_.get(post, `node.frontmatter.category`)) {
        category = category.concat(post.node.frontmatter.category)
      }
    })
    /* Eliminate duplicate categories */
    category = _.uniq(category)

    /* Make category pages */
    category.forEach(category => {
      const categoryPath = `/categories/${_.kebabCase(category)}/`

      createPage({
        path: categoryPath,
        component: categoryTemplate,
        context: {
          category,
        },
      })
    })

    /* Extract tag data from query */
    const tags = result.data.tagsGroup.group
    /* Make tag pages */
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })

    /* Count blog posts. */
    if (post.node.frontmatter.template === 'blog-post') {
      blogPostsCount++
    }
  })

  /* Create blog-list pages */
  const postsPerPage = 9
  const numPages = Math.ceil(blogPostsCount / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts` : `/posts/${i + 1}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value,
    })
  }
}

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Headings {
      depth: String
      value: String
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      featuredImage: File @fileByRelativePath
    }

    type Fields {
      slug: String
    }
  `)
}
