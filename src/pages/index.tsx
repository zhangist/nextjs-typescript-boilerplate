import * as React from 'react'
import styled from 'styled-components'
import Menu from '../components/app/Menu'

const Pre = styled.pre`
  background: #eee;
  overflow: auto;
`

export default () => (
  <div>
    <h1>Index Page</h1>
    <Menu />
    <h3>Directory structure:</h3>
    <Pre>{`
      |-src
        |-actions            /* redux actions */
          \\-index.ts
        |-actionTypes        /* redux action types */
          \\-index.ts
        |-components         /* components */
          |-app              /* app components(eg: Header/Menu/Footer) */
            |-...
            \\-index.ts
          |-mui              /* custom material-ui components */
            |-...
            \\-index.ts
          \\-theme.ts         /* theme of components */
        |-lib                /* global lib */
          \\-...
        |-pages              /* pages of next.js */
          \\-...
        |-reducers           /* redux reducers */
          \\-...
        |-routes             /* api routes of koa & pages routes of next.js */
          |-...
          \\-index.ts         /* api routes of koa */
          \\-pages.ts         /* pages routes of next.js */
        |-store              /* redux store */
          \\-index.ts
        \\-next.config.ts     /* config of next.js */
        \\-server.ts          /* server */
      \\-.babelrc
      \\-.gitignore
      \\-package.json
      \\-README.md
      \\-tsconfig.json
      \\-tslint.json
    `}</Pre>
  </div>
)
