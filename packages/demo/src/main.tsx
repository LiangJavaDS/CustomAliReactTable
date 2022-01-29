import React from 'react'
import ReactDOM from 'react-dom'
import { StyleSheetManager } from 'styled-components'
import { DemoApp, MutiLevelMatrix } from './DemoApp'
import 'antd/dist/antd.css'

const hot = (module as any).hot

if (hot) {
  hot.accept()
}

ReactDOM.render(
  <StyleSheetManager disableVendorPrefixes>
    {/* <DemoApp /> */}
    <MutiLevelMatrix />
  </StyleSheetManager>,
  document.getElementById('container'),
)
