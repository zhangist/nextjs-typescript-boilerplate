import Link from 'next/link'
import * as React from 'react'
import Header from '../components/Header'
import config from '../config'

export default () => (
  <div>
    <Header />
    <ul>
      <li><Link href="/index" as="/"><a>index</a></Link></li>
      <li><Link href="/about" as="/about"><a>about</a></Link></li>
    </ul>
    <div>index</div>
    <div>{config}</div>
  </div>
)
