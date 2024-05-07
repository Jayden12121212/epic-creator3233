const PostCSS = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ["last 2 versions", ">1%"],
      stage: 3,
    },

    "postcss-pxtorem": {
      rootValue: 16,
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
};

module.exports = PostCSS;
