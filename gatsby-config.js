module.exports = {
  siteMetadata: {
    title: `Hello Gatsby`,
    description: `Check out gatsby in action!`,
    author: `michael.horsch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // Load in content from contentful
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `bnzbt2xzyi0e`,
        accessToken: `3a9fe8019b0e0526783e8b0ccd292180a8ef35dce36429889266be985638522a`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
