import * as Router from 'koa-router'

const router = new Router({
  prefix: '/api/site',
})

router.get('/hello', (ctx) => {
  ctx.body = 'Hello world!'
})

export default router
