function buildConfig(env) {
  return require('./build/' + env + '.js');
}
// how to get webpack-dev-server argument
module.exports = buildConfig;