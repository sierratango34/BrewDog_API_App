const config = {
  entry: `${__dirname}/client/src/app.js`,
  output: {
    filename: "bundle.js",
    path: `${__dirname}/public/js`
  },
  mode: "development"
};

module.exports = config;
