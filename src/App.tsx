import { Box, Theme } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import router from 'routing/router'

const App: React.FC = () => {
    return (
        <Box
            sx={(theme: Theme) => ({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh',
                background: theme.palette.background.default,
                transition: theme.customTransitions.onThemeChange,
            })}
        >
            <RouterProvider router={router} />
        </Box>
    )
}

export default App
