# serverless-remove-resources
A Serverless Framework plugin for removing resources from your CloudFormation template before deployment.

## Installation
To install this plugin, run:

```bash
npm install serverless-remove-resources
```

Then, add `serverless-remove-resources` to the plugins array in your Serverless service's serverless.yml file:

```bash
plugins:
  - serverless-remove-resources
```

## Usage
To use this plugin, specify the resources you want to delete under the `custom.serverless-remove-resources` key in your serverless.yml file. The value should be a list of resource logical names.

For example:

```bash
custom:
  serverless-remove-resources:
    - IamRoleLambdaExecution
```

This will remove the IamRoleLambdaExecution resource from your CloudFormation template before deployment.

## Note
This plugin should be used with caution, as deleting resources can have unintended consequences. Make sure to thoroughly test any changes made using this plugin before deploying to production.

## Contribution
We welcome contributions to this project. If you are interested in contributing, please feel free to submit a pull request.