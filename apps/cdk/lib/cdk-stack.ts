import { resolve } from 'path';
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as nodeLambda from '@aws-cdk/aws-lambda-nodejs';
import * as apigw from '@aws-cdk/aws-apigateway';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
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