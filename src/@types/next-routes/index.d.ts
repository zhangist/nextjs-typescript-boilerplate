declare module 'next-routes' {
  import * as next from 'next'
  import * as Koa from 'koa'

  class Routes {
    constructor(opts?: {})
    add(name: object|string, pattern?: any, page?: any): Routes
    getRequestHandler(next: next.Server): Koa.Middleware
  }

  function routes(opts?: {}): Routes
  export default routes
}
