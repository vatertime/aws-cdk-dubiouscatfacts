import { resolve } from 'path';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as nodeLambda from '@aws-cdk/aws-lambda-nodejs';
import * as apigw from '@aws-cdk/aws-apigateway';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    /*
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

    new apigw.LambdaRestApi(this, 'HelloThereEndpoint', {
      handler: helloThereLambda
    });
*/
    const dubiousLambda = new nodeLambda.NodejsFunction(this, 'DubiousCatFactsHandler', {
      runtime: lambda.Runtime.NODEJS_12_X,
      entry: resolve('./../lambda/src/main.ts'),
      handler: 'handler'
    });

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: dubiousLambda
    });
  }
}