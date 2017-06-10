function buildConfig(env) {
  env = env || 'dev';  
  return require('./config/webpack.' + env + '.config.js')(env)
}

module.exports = buildConfig;