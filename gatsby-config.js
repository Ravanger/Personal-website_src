module.exports = {
  siteMetadata: {
    title: `Boris Rossovsky`,
    subtitle: `Design and Development`,
    description: `Design and Development`,
    author: `Boris rossovsky`,
    siteUrl: `https://borisr.dev`,
    email: `contact@borisr.dev`,
    instagram: `https://www.instagram.com/ravanger666`,
    github: `https://github.com/Ravanger`,
    linkedin: `https://www.linkedin.com/in/brossovsky`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://borisr.dev`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:100,700`],
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
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 960,
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: (videoId) =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
              backgroundColor: `none`,
              quality: 70,
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `path/to/dir`,
              ignoreFileExtensions: [`jpg`], //There should only be jpg and gif files
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `37123439`,
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
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ["**/*.{js,jsx,jpg,png,woff2,html,css}"],
        },
      },
    },
  ],
}
