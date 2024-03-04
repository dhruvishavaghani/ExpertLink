import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { LoginProvider } from './Context/LoginContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
