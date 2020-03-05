module.exports = {
  siteMetadata: {
    title: `Boris Rossovsky`,
    subtitle: `Design and Development`,
    description: `Design and Development`,
    author: `Boris rossovsky`,
    siteUrl: `https://borisr.dev`,
    email: `contact@borisr.dev`,
    facebook: `https://www.facebook.com/ravanger666`,
    instagram: `https://www.instagram.com/ravanger666`,
    github: `https://github.com/Ravanger`,
    linkedin: `https://www.linkedin.com/in/brossovsky`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://borisr.dev`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`100`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              wrapperStyle: fluidResult =>
                `flex:${_.round(fluidResult.aspectRatio, 2)};`,
              backgroundColor: `none`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `ravanger666`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `boris-rossovsky`,
        short_name: `borisr`,
        start_url: `/`,
        background_color: `#5a9c88`,
        theme_color: `#5a9c88`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
