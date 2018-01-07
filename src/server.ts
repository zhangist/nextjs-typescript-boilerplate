import * as express from 'express'
import * as Router from 'koa-router'
import * as nextjs from 'next'
import * as path from 'path'

import routes from './routes'
import pages from './routes/pages'

const port = parseInt(process.env.PORT || '3030', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = nextjs({
  dev,
  dir: './dist',
})
const handler = pages.getRequestHandler(app)

app.prepare()
.then(() => {
  const server = express()

  // router.use(pages.routes(), pages.allowedMethods())
  // router.use(routes.routes(), routes.allowedMethods())

  // router.get('/', async (ctx) => {
  //   await app.render(ctx.req, ctx.res, '/index', ctx.query)
  //   ctx.respond = false
  // })
  // router.get('/b', async (ctx) => {
  //   await app.render(ctx.req, ctx.res, '/about', ctx.query)
  //   ctx.respond = false
  // })

  // router.get('*', async (ctx) => {
  //   await handle(ctx.req, ctx.res)
  //   ctx.respond = false
  // })

  server.use(handler)

  server.listen(port, (err: any) => {
    if (err) { throw err }
    console.log(`> Ready on http://localhost:${port}`)
  })
})
