import Link from 'next/link'
import * as React from 'react'
import Header from '../components/Header'

export default () => (
  <div>
    <Header />
    <ul>
      <li><Link href="/index" as="/"><a>index</a></Link></li>
      <li><Link href="/about" as="/about"><a>about</a></Link></li>
    </ul>
    <div>about</div>
  </div>
)
