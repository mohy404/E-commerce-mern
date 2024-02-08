import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import store  from './redux/store'

import App from './App.tsx'
import './index.css'
import "./i18n"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
