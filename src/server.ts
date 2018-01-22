import 'isomorphic-fetch'
import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as nextjs from 'next'
import routes from './routes'
import pages from './routes/pages'

const PORT = parseInt(process.env.PORT || '3000', 10)
const DEV = (process.argv.indexOf('--dev') > -1)

// set process.env.NODE_ENV for some 3rd lib
process.env.NODE_ENV = DEV
  ? 'development'
  : 'production'

const app = nextjs({ dev: DEV, dir: './build' })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  const server = new Koa()
  const router = new Router()

  // server api, prefix: '/api'
  router.use(routes.routes(), routes.allowedMethods())

  // nextjs get routes of pages
  pages(app, router)
  // nextjs handle
  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.use(router.allowedMethods())

  server.listen(PORT, () => {
    console.log(`\r\nRunning on http://localhost:${PORT}\r\n`)
  })
})
