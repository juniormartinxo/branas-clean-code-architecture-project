import Fastify from 'fastify'

function buildServer() {
  const server = Fastify()

  server.get('/status', async function () {
    return { status: 'ON' }
  })

  return server
}

export default buildServer
