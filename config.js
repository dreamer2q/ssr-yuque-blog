module.exports = {
  // chainBaseConfig: chain => {
  //   chain.module
  //     .rule('stylus-loader')
  //     .test(/\.styl$/)
  //     .use('style-loader')
  //     .loader('stylus-loader');
  // },
  // whiteList: [/\.(styl)$/],
  css: () => {
    return {
      loaderOptions: {
        stylus: {},
        postcss: {
          plugins: [
            // require('stylus-loader'),
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
    };
  },
};
