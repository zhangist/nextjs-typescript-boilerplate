import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as nextjs from 'next'
import * as logger from './lib/logger'
import pages from './routes/pages'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = (process.argv.indexOf('--dev') > -1)
const app = nextjs({ dev, dir: './build' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  // nextjs get routes of pages
  pages(app, router)
  // nextjs handle
  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  // nextjs statusCode
  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  // server api
  server.use(router.routes())
  server.use(router.allowedMethods())

  server.listen(port, () => {
    logger.print(`\r\nRunning on http://localhost:${port}\r\n`)
  })
})
