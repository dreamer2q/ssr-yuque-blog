module.exports = {
  css: () => {
    return {
      loaderOptions: {
        postcss: {
          // options: any
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
    };
  },
};
