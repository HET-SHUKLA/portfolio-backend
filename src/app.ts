import Fastify from 'fastify';

export const fastify = Fastify({
  logger: true
});

fastify.route({
  method: 'GET',
  url: '/health',
  schema: {
    // the response needs to be an object with an `hello` property of type 'string'
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'number' }, // 200
          message: { type: 'string' }, // OK
          success: { type: 'boolean' } // true
        }
      }
    }
  },
  // this function is executed for every request before the handler is executed
  preHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async (request, reply) => {
    return { 
        status: 200,
        message: 'OK',
        success: true
    }
  }
});