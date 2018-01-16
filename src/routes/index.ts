import * as Router from 'koa-router'
import apiSite from './api/site'

const router = new Router()

router.use(apiSite.routes(), apiSite.allowedMethods())

export default router
