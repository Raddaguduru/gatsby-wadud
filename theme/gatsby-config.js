module.exports = (themeOptions) => {
  const loadDefaultPages = themeOptions.loadDefaultPages !== undefined ? themeOptions.loadDefaultPages : true;
  const contentPath      = themeOptions.contentPath || 'content';
  const manifest         = themeOptions.manifest ? themeOptions.manifest : {
    name: `Voluntas`,
    short_name: `Voluntas`,
    start_url: `/`,
    background_color: `31404e`,
    theme_color: `#31404e`,
    display: `minimal-ui`,
    icon: `${__dirname}/assets/nehalist-gatsby.png`
  };

  return {
    siteMetadata: {
      title: `Voluntas`,
      siteUrl: `https://voluntas.netlify.com`,
      description: `About %TOPICS%`,
      topics: [
        `Nutrition`,
        `Supplements`,
        `Science`,
        `Training`,
        `Health`
      ],
      menu: [
        {
          name: 'HOME',
          path: '/'
        },
        {
          name: 'COACHING',
          path: '/coaching'
        },
        {
          name: 'ABOUT',
          path: '/about'
        },
        {
          name: 'CONTACT',
          path: '/contact'
        },
      ],
      footerMenu: [
        {
          name: 'RSS',
          path: '/rss.xml'
        },
        {
          name: 'Sitemap',
          path: '/sitemap.xml'
        }
      ],
      search: true,
      author: {
        name: `Voluntas`,
        description: `I'm <strong>Ravi</strong>. I like fitness and tech, so I decided to merge the two into voluntas.
        Feel free to follow me on my social media or go through my repository.`,
        social: {
          facebook: ``,
          twitter: '',
          linkedin: `https://www.linkedin.com/in/raddaguduru`,
          instagram: `https://www.instagram.com/rawveefitness`,
          youtube: ``,
          github: `https://github.com/Raddaguduru`,
          twitch: ``
        }
      }
    },
    plugins: [
      `gatsby-plugin-typescript`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-manifest`,
        options: manifest
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: 'content',
          path: contentPath
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `themeAssets`,
          path: `${__dirname}/assets`
        }
      },
      {
        resolve: `gatsby-transformer-yaml`,
        options: {
          typeName: `Tags`
        }
      },
      {
        resolve: `gatsby-plugin-lunr`,
        options: {
          languages: [
            {
              name: 'en'
            }
          ],
          fields: [
            { name: 'title', store: true, attributes: { boost: 20 } },
            { name: 'content', store: true },
            { name: 'tags', store: true },
            { name: 'excerpt', store: true },
            { name: 'path', store: true }
          ],
          resolvers: {
            MarkdownRemark: {
              title: node => node.frontmatter.title,
              content: node => node.html,
              tags: node => node.frontmatter.tags,
              excerpt: node => node.frontmatter.excerpt,
              path: node => node.frontmatter.path
            }
          }
        }
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            `gatsby-remark-autolink-headers`,
            `gatsby-remark-prismjs`,
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1200
              }
            }
          ]
        }
      },
      loadDefaultPages && {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/src/pages`
        }
      },
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
                return allMarkdownRemark.edges.map(edge => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.frontmatter.excerpt,
                    date: edge.node.frontmatter.created,
                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    custom_elements: [{ "content:encoded": edge.node.html }],
                  })
                })
              },
              query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___created] },
                  filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" } }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        title
                        excerpt
                        path
                        created
                      }
                    }
                  }
                }
              }
              `,
              output: `/rss.xml`,
              title: `RSS Feed`

            }
          ]
        }
      }
    ].filter(Boolean)
  };
};
