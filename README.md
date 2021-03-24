

# Dubious Cat Facts

An exercise in deploying a Lambda with AWS CDK. Most commands are run the NX project's root, but with the `apps/cdk` folder we'll be running our commands from inside that

## Prerequisites:
 * AWS CLI (test installation by running `aws --version`)
 * AWS IAM credentials ([Setup instructions](https://cdkworkshop.com/15-prerequisites/200-account.html))
 * NX framework (`npm install -g nx`)
 
## Create NX Workspace:

From your root projects directory, initiate an NX workspace
```bash
npx create-nx-workspace@latest --preset=empty [desired-repo-name]
```

Create an app directory for code which will be located in the `apps/` folder
```bash
  npm i @nrwl/node
  nx g @nrwl/node:app lambda
```

Note: to remove an app directory
```bash
nx g @nrwl/workspace:rm lambda
```

## Create CDK workspace

```bash
mkdir apps/cdk && cd apps/cdk
npm install -g aws-cdk
cdk init --language typescript
```
Bootstrap the project - This creates an s3 bucket so that your assets have a place to live when doing deployments
```bash
cdk bootstrap
```

### CDK Structure:

 * bin/cdk.ts - entrypoint of the application, will load stack defined in...
 * lib/cdk-stack.ts - where main stack is defined

### Working with Lambdas
```bash
npm install @aws-cdk/aws-lambda
```
```typescript
import * as lambda from '@aws-cdk/aws-lambda';
```

Add the lambda to your lib/cdk-stack.ts
```typescript
const helloThereLambda = new lambda.Function(this, 'KenobiHandler', {
  runtime: lambda.Runtime.NODEJS_12_X,
  code: lambda.Code.fromInline(`
  exports.handler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: "Hello there"
    };
  };
  `),
  handler: 'index.handler'
});
```

### Working with AWS Gateway
```bash
npm install @aws-cdk/aws-apigateway
```
```typescript
import * as apigw from '@aws-cdk/aws-apigateway';
```

### Adjust for bundling
https://github.com/aws/aws-cdk/tree/master/packages/%40aws-cdk/aws-lambda-nodejs
```bash
npm i @aws-cdk/aws-lambda-nodejs
npm i --save-dev esbuild@0
```

## Useful links
 * [CDK Getting Started Guide](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html)
 * [CDK Workshop](https://cdkworkshop.com/)

 ## Other Notes
  [Node 15 issue](https://github.com/aws/aws-cdk/issues/12536) causing deployments to throw errors
