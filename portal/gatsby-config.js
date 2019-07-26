/* eslint-disable */
module.exports = {
    pathPrefix: "/jokul",
    siteMetadata: {
        title: `Jokul`,
        description: `Documentation of Jøkul design system`,
        author: `Fremtind`,
    },
    plugins: [
        "gatsby-plugin-typescript",
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/images`,
                name: "images",
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
    ],
};
