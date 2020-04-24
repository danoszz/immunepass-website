require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "ImmunePass — COVID19 immuniteits pas",
    titleTemplate: "%s | ImmunePass",
    description:
      "ImmunePass is een digitale pas waarmee je kunt aantonen dat je immuun bent voor het coronavirus",
    url: "https://www.immunepass.nl", // No trailing slash allowed!
    image: "/og-image.jpg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    "gatsby-plugin-transition-link",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-596355XX-X",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://health.us19.list-manage.com/subscribe/post?u=5fa4943563677b48e28fce8b2&amp;id=cc53b8e8f8", // add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ImmunePass — Keer veilig terug naar de samenleving`,
        short_name: `ImmunePass`,
        start_url: `/`,
        background_color: `#ff1053`,
        theme_color: `#ff1053`,
        display: `standalone`,
        icon: `src/assets/images/favicons/favicon.png`,
      },
    },
  ],
};
