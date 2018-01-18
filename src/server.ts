import * as hook from 'css-modules-require-hook'
import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as nextjs from 'next'
import * as stylus from 'stylus'
import * as logger from './lib/logger'
import routes from './routes'
import pages from './routes/pages'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = (process.argv.indexOf('--dev') > -1)

// set process.env.NODE_ENV for some 3rd lib
if (dev) {
  process.env.NODE_ENV = 'development'
} else {
  process.env.NODE_ENV = 'production'
}

const app = nextjs({ dev, dir: './build' })
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

  hook({
    extensions: '.styl',
    processCss: (data: any, filename: any) => {
      return stylus(data)
        .set('filename', filename)
        .render()
    },
  })

  server.use(router.routes())
  server.use(router.allowedMethods())

  server.listen(port, () => {
    logger.print(`\r\nRunning on http://localhost:${port}\r\n`)
  })
})
