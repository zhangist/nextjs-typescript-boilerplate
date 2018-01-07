import * as Router from 'koa-router'

import apiSiteRouter from './api/site'

const router = new Router()
router.use(apiSiteRouter.routes(), apiSiteRouter.allowedMethods())

export default router
