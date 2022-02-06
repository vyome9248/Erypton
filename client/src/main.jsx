import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'
window.React = React
import './index.css'
import App from './App'

import { TransactionProvider } from './context/TransactionContext';

ReactDOM.render(
  <TransactionProvider>
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
  </TransactionProvider>,
  document.getElementById('root')
)
