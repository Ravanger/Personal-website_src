const path = require("path")
const _ = require("lodash")
const createPaginatedPages = require("gatsby-paginate")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/components/templates/post.jsx`)
  const tagTemplate = path.resolve(`./src/components/templates/tag.jsx`)
  const indexTemplate = path.resolve(`./src/components/templates/index.jsx`)

  const result = await graphql(`
    query {
      allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 2000) {
        edges {
          node {
            id
            excerpt
            timeToRead
            frontmatter {
              path
              title
              date(formatString: "MMM DD, YYYY")
              tags
              heroimage {
                childImageSharp {
                  fluid(
                    maxWidth: 600
                    maxHeight: 480
                    quality: 70
                    cropFocus: CENTER
                    srcSetBreakpoints: [360, 480, 600]
                  ) {
                    src
                    srcSet
                    aspectRatio
                    sizes
                    base64
                  }
                }
                publicURL
              }
            }
          }
        }
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages
  const posts = result.data.allMdx.edges
  posts.forEach((post, index) => {
    createPage({
      path: post.node.frontmatter.path,
      component: postTemplate,
      context: {
        id: post.node.id,
        next: index === 0 ? null : posts[index - 1].node,
        prev: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })

  // Create tag pages
  const tags = result.data.allMdx.group
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

  // Pagination
  createPaginatedPages({
    edges: posts,
    createPage: createPage,
    pageTemplate: indexTemplate,
    pageLength: 5, // how many posts to show
    pathPrefix: "", // path to add to the path generated in the createPagefunc "your_site/your_page_name/2"
    context: {}, // This is optional and defaults to an empty object if not used
  })
}

// Don't include source maps
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // If production JavaScript and CSS build
  if (stage === "build-javascript") {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}
