// require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Reactive Resume',
    siteUrl: 'https://rxresu.me',
    description: 'A free and open source resume builder.',
    version: '2.7.10',
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public|_this_is_virtual_fs_path_)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyAkP-ELnPiwbCEWDK9ZWNO4RJDU80VvanE',
          authDomain: 'resume-builder-b48f5.firebaseapp.com',
          databaseURL:
            'https://resume-builder-b48f5-default-rtdb.firebaseio.com',
          projectId: 'resume-builder-b48f5',
          storageBucket: 'resume-builder-b48f5.appspot.com',
          messagingSenderId: '736300261920',
          appId: '1:736300261920:web:23a196210f7a09e75e9245',
          measurementId: 'G-W94BX4EEBW',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Reactive Resume',
        short_name: 'Reactive Resume',
        start_url: '/',
        background_color: '#212121',
        icon: `static/images/logo.png`,
        orientation: 'landscape',
        theme_color: '#212121',
        display: 'standalone',
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-webfonts',
      options: {
        fonts: {
          google: [
            {
              family: 'Lato',
              variants: ['400', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Montserrat',
              variants: ['400', '500', '600', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Nunito',
              variants: ['400', '600', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Open Sans',
              variants: ['400', '600', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Raleway',
              variants: ['400', '500', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Rubik',
              variants: ['400', '500', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Source Sans Pro',
              variants: ['400', '600', '700'],
              subsets: ['latin-ext'],
            },
            {
              family: 'Titillium Web',
              variants: ['400', '600', '700'],
              subsets: ['latin-ext'],
            },
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/app/*'] },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'articles',
        path: `${__dirname}/src/articles`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
  ],
};
