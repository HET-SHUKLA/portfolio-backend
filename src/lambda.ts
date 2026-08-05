import awsLambdaFastify from '@fastify/aws-lambda';
import type {
  APIGatewayProxyEventV2,
  Context,
} from "aws-lambda";
import { fastify } from './app.ts';

let proxy: any;

export const handler = async (event: APIGatewayProxyEventV2, context: Context) => {
    if (!proxy) {
        proxy = awsLambdaFastify(fastify);
    }

    return proxy(event, context);
};