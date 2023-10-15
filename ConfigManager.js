class ConfigManager {
  constructor() {
    this.configurations = {};
  }

  setConfig(key, value) {
    this.configurations[key] = value;
  }

  getConfig(key) {
    return this.configurations[key];
  }

  listConfigurations() {
    return this.configurations;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ConfigManager();
    }
    return this.instance;
  }
}

module.exports = ConfigManager;
