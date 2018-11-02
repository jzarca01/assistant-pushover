const Pushover = require('node-pushover');

class AssistantPushover {
  constructor({
    appKey,
    userKey
  }) {
    this.appKey = appKey
    this.userKey = userKey
    this.push = new Pushover({
      token: this.appKey,
      user: this.userKey
    })
  }

  init(plugins) {
    this.plugins = plugins
    if (!this.appKey || !this.userKey) {
      return Promise.reject("[assistant-pushover] Erreur : vous devez configurer ce plugin !")
    }
    return Promise.resolve(this)
  }

  action(text) {
    const [title, message] = text.split("--")
    this.push.send(title, message)
  }
}

exports.init = (configuration, plugins) => {
  return new AssistantPushover(configuration).init(plugins)
    .then(resource => {
      console.log("[assistant-pushover] Plugin chargé et prêt.")
      return resource
    })
}