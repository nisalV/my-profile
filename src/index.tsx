import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { authConfig } from './Common/Authentication'
import { Amplify } from 'aws-amplify'
Amplify.configure(authConfig)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
