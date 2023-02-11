import React from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { AppContextProvider } from 'contexts/AppContext'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <ThemeContextProvider>
            <AppContextProvider>
                <App />
            </AppContextProvider>
        </ThemeContextProvider>
    </React.StrictMode>
)
