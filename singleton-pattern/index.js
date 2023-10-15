const ConfigManager = require("../ConfigManager");

const config1 = ConfigManager.getInstance();
const config2 = ConfigManager.getInstance();

config1.setConfig("apiKey", "my-secret-key");
config2.setConfig("apiEndpoint", "https://api.example.com");

console.log(config1.getConfig("apiKey")); // Deve imprimir 'my-secret-key'
console.log(config2.getConfig("apiEndpoint")); // Deve imprimir 'https://api.example.com'

console.log(config1 === config2); // Deve imprimir 'true', pois são a mesma instância

config1.setConfig("theme", "dark");
console.log(config2.getConfig("theme")); // Deve imprimir 'dark'
