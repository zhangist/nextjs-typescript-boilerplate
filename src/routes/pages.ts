// tslint:disable-next-line:no-var-requires
const pages = require('next-routes')()

pages
.add('/', '/index', 'index')
.add('/about', '/about', 'about')

export default pages
