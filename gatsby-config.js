module.exports = {
  siteMetadata: {
    title: 'Genert programming language notes',
    description:
      'This site documents programming languages reading and learning notes.',
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-meta-redirect`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
        ],
        remarkPlugins: [
          require('remark-slug'),
          require('remark-math'),
          require('remark-external-links'),
          require('remark-footnotes'),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `docs`,
      },
    },
  ],
};
