const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/components/post.jsx`)
  const tagTemplate = path.resolve(`./src/components/tag.jsx`)

  const result = await graphql(`
    query {
      allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 2000) {
        edges {
          node {
            id
            frontmatter {
              path
              title
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
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
      },
    })
  })

  // Create tag pages
  const tags = result.data.allMdx.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: { tag: tag.fieldValue },
    })
  })
}
