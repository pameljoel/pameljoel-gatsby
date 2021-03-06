module.exports = {
  siteMetadata: {
    title: `Pamel Joel Beltrè - Personal Portfolio site`,
    description: `I am a front end designer, I specialize in UI/UX Design and JavaScript development with React / AngularJS`,
    author: `@pameljoel`,
    siteUrl: 'https://www.pameljoel.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          { domain: 'https://www.google.com/', crossOrigin: true },
          { domain: 'https://www.google-analytics.com', crossOrigin: true },
          { domain: 'https://www.google.it', crossOrigin: true },
          { domain: 'https://stats.g.doubleclick.net', crossOrigin: true },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pameljoel`,
        short_name: `pameljoel`,
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
};
