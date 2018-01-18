import Link from 'next/link'
import * as React from 'react'

export default () => (
  <div>
    <h2>Menu</h2>
    <ul>
      <li><Link href="/index" as="/"><a>Index</a></Link></li>
      <li><Link href="/reduxWrite" as="/redux-write"><a>Redux (write)</a></Link></li>
      <li><Link href="/reduxRead" as="/redux-read"><a>Redux (read)</a></Link></li>
      <li><Link href="/mui" as="/mui"><a>MUI (material-ui custom)</a></Link></li>
      <li><Link href="/ssr" as="/ssr"><a>Fetching data on server</a></Link></li>
      <li><Link href="/about" as="/about"><a>About</a></Link></li>
    </ul>
  </div>
)
