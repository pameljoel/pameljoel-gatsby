module.exports = {
  siteMetadata: {
    title: `Pamel Joel Beltrè - Personal Portfolio site`,
    description: `I am a front end designer, I specialize in UI/UX Design and JavaScript development with React / AngularJS`,
    author: `@pameljoel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pameljoel`,
        short_name: `pj`,
        start_url: `/`,
        background_color: `#12b5fc`,
        theme_color: `#12b5fc`,
        display: `minimal-ui`,
        icon: `src/images/me.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
