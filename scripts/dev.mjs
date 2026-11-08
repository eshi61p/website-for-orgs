import { createServer } from 'vite'

const args = process.argv.slice(2)
let host
let port
let strictPort = true

for (let index = 0; index < args.length; index += 1) {
  const argument = args[index]

  if (argument === '--host') {
    host = args[index + 1]
    index += 1
  } else if (argument.startsWith('--host=')) {
    host = argument.slice('--host='.length)
  } else if (argument === '--port') {
    port = Number(args[index + 1])
    index += 1
  } else if (argument.startsWith('--port=')) {
    port = Number(argument.slice('--port='.length))
  } else if (argument === '--strictPort' || argument === '--strict-port') {
    strictPort = true
  }
}

// Kimi Work checks localhost over IPv4 as well as IPv6. On this Windows
// setup Vite's `localhost` binding accepts neither reliably, so listen on
// all IPv4 interfaces while preserving the requested URL and port.
if (host === 'localhost') host = '0.0.0.0'

const server = await createServer({
  server: {
    ...(host ? { host } : {}),
    ...(Number.isInteger(port) ? { port } : {}),
    strictPort,
  },
})

await server.listen()
server.printUrls()

let closing = false
const close = async () => {
  if (closing) return
  closing = true
  await server.close()
  process.exit(0)
}

process.on('SIGINT', close)
process.on('SIGTERM', close)
