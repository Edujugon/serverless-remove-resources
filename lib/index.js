"use strict";

const PLUGIN_NAME = "serverless-remove-resources";

const removeResources = (service, resourceNames) => {
  const cfTemplate = service.provider.compiledCloudFormationTemplate;

  resourceNames.forEach(name => {
    delete cfTemplate.Resources[name];
  });
};

class ServerlessRemoveResourcesPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;
    this.hooks = {
      'before:deploy:deploy': this.beforeDeploy.bind(this)
    };
  }

  beforeDeploy() {
    const { serverless } = this;
    const { service } = serverless;
    const { custom } = service;

    if (custom && custom[PLUGIN_NAME] && Array.isArray(custom[PLUGIN_NAME])) {
      removeResources(service, custom[PLUGIN_NAME]);
    } else {
      this.serverless.cli.log(`[${PLUGIN_NAME}] No resources specified for removal`);
    }
  }
}

module.exports = ServerlessRemoveResourcesPlugin;
