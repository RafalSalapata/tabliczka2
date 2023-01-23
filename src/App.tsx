import { Box, Theme } from '@mui/material'

import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import RootLayout from './views/RootLayout'

import Home from 'views/Home'
import MathSetup from 'views/Home/Math/MathSetup'
import MathTest from 'views/Home/Math/MathTest'
import MathLayout from 'views/Home/Math/MathLayout'
import EnglishLayout from 'views/Home/English/EnglishLayout'
import EnglishSettings from 'views/Home/English/EnglishSettings'
import EnglishTest from 'views/Home/English/EnglishTest'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='matematyka' element={<MathLayout />}>
                <Route index element={<MathSetup />} />
                <Route path='dodawanie' element={<MathTest />} />
                <Route path='odejmowanie' element={<MathTest />} />
                <Route path='mnozenie' element={<MathTest />} />
                <Route path='dzielenie' element={<MathTest />} />
            </Route>
            <Route path='angielski' element={<EnglishLayout />}>
                <Route index element={<EnglishSettings />} />
                <Route path='kolory' element={<EnglishTest />} />
            </Route>
        </Route>
    )
)

const App: React.FC = () => {
    return (
        <Box
            sx={(theme: Theme) => {
                return {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    minHeight: '100vh',
                    background: theme.palette.background.default,
                    transition: theme.customTransitions.onThemeChange,
                }
            }}
        >
            <RouterProvider router={router} />
        </Box>
    )
}

export default App
