import type { GatsbyConfig } from 'gatsby'
/* eslint @typescript-eslint/no-var-requires: "off" */
const settings = require('./src/util/site.json')

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Bibwoe`,
    titleTemplate: `%s`,
    author: {
      name: `Don Boulton`,
      summary: `Resides in Santa Barbara.`,
    },
    copyrightYear: `© 2022`,
    description: `Basic Instructions Books While On Earth`,
    siteUrl: `https://bibwoe.com/`,
    siteImage: `./static/apple-touch-icon.png`,
    social: {
      twitter: `donaldwboulton`,
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        preset: require('./src/gatsby-plugin-theme-ui'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img/`,
        name: 'img',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video-ext',
            options: {
              width: 800,
              ratio: 1.77 /* Optional: Defaults to 16/9 = 1.77 */,
              related: false /* Optional: Will remove related videos from the end of an embedded YouTube video. */,
              noIframeBorder: true /* Optional: Disable insertion of <style> border: 0 */,
              loadingStrategy:
                'lazy' /* Optional: Enable support for lazy-load offscreen iframes. Default is disabled. */,
              containerClass:
                'embedVideo-container' /* Optional: Custom CSS class for iframe container, for multiple classes separate them by space */,
              sandboxOpts: 'allow-same-origin allow-scripts allow-popups allow-presentation',
              iframeId:
                false /* Optional: if true, iframe's id will be set to what is provided after 'youtube:' (YouTube IFrame player API requires iframe id) */,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              backgroundColor: 'none',
              disableBgImage: true,
              withWebp: true,
              loading: 'lazy',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden='true' height='20' version='1.1' viewBox='0 0 16 16' width='20'><path fill='#777' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'></path></svg>`,
              className: `link-icon`,
              maintainCase: true,
              removeAccents: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              escapeEntities: {},
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Gatsby Starter Blog RSS Feed',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bibwoe.com`,
        short_name: `Bibwoe`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: 'static' + settings.meta.iconimage,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `description`, `content`, `path`, `date`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          BlogPost: {
            title: node => node.title,
            description: node => node.description,
            content: node => node.rawMarkdownBody,
            path: node => node.slug,
            date: node => node.date,
            featuredImage: (node, getNode) => getNode(node.featuredImage___NODE),
          },
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            content: node => node.rawMarkdownBody,
            path: node => node.frontmatter.path,
            date: node => node.frontmatter.date,
          },
        },
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
        duration: 1000,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-30162465-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/404/**", "/thanks/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "bibwoe.com",
        // defaults to false
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `about`, `/contact`, `/posts/*`],
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/contact': ['Link: https://embed.small.chat/T8PMJ5ZNYGDRA9BJEA.js; rel=javascript'],
        },
        allPageHeaders: [],
        mergeSecurityHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers, path) => headers,
        generateMatchPathRewrites: true,
      },
    },
  ],
}

export default config
