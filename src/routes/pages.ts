import * as Router from 'koa-router'
import * as nextjs from 'next'

const pages = [
  ['/', '/index'],
  ['/redux-write', '/reduxWrite'],
  ['/redux-read', '/reduxReact'],
  ['/mui', '/mui'],
  ['/ssr', '/ssr'],
  ['/about', '/about'],
]

export default (app: nextjs.Server, router: Router) => {
  for (const page of pages) {
    router.get(page[0], async (ctx) => {
      await app.render(ctx.req, ctx.res, page[1] || page[0], ctx.query)
      ctx.respond = false
    })
  }
}
