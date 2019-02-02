module.exports = {
  siteMetadata: {
    name: `Faure Hu`,
    title: `Gestionando paquetes`,
    date: `Febrero, 2019`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
