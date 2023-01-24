import React from 'react';
import App from './src/containers/App';
import {name as appName} from './app.json';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { apiSlice } from './src/api/api'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('react-native-web-app'))
root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)


