/**
 *  we pass in through the command line using the –env argument:
 * webpack --env=file
 * @param {} env 
 */
function buildConfig(env) {
  require('./build/' + env + '.js')
}
module.exports = buildConfig;