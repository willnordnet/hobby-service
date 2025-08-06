import fastify, { FastifyInstance } from 'fastify'

function buildApp(): FastifyInstance {
  const app = fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
      },
    },
  })

  app.get('/', async (request, reply) => {
    return { status: 'ok' }
  })

  return app
}

export default buildApp
