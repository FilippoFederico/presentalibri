// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Presentalibri',
  // from https://gridsome.org/plugins/@gridsome/source-filesystem
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
        // route: '/blog/:slug'
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  // templates: {
  //   PostDetails: '/:slug'
  // }
}
