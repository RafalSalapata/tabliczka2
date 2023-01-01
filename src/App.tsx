import { Box, Theme } from '@mui/material'

import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import RootLayout from './views/RootLayout'

import Home from 'views/Home'
import MathSettings from 'views/Math/MathSettings'
import MathTest from 'views/Math/MathTest'
import MathLayout from 'views/Math/MathLayout'
import EnglishLayout from 'views/English/EnglishLayout'
import EnglishSettings from 'views/English/EnglishSettings'
import EnglishTest from 'views/English/EnglishTest'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='matematyka' element={<MathLayout />}>
                <Route index element={<MathSettings />} />
                <Route path='dodawanie' element={<MathTest />} />
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
                    transitionProperty: 'background, color',
                    transitionDuration: '0.5s',
                    transitionTimingFunction: 'linear',
                }
            }}
        >
            <RouterProvider router={router} />
        </Box>
    )
}

export default App
