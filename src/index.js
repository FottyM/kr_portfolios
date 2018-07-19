import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

const MainApp = () =>
  <Provider store={{}}>
    <App />
  </Provider>

ReactDOM.render(<MainApp />, document.getElementById('root'))
registerServiceWorker()
