import { Box, Theme } from '@mui/material'
import Navigation from 'components/Navigation'
import Topbar from 'components/Topbar'
import { Outlet } from 'react-router-dom'

const RootLayout: React.FC = () => {
    return (
        <>
            <Topbar />
            <Box
                sx={(theme: Theme) => {
                    return {
                        paddingX: theme.spacing(1),
                        paddingY: theme.spacing(0.5),
                        width: '100%',
                        maxWidth: '800px',
                    }
                }}
            >
                <Navigation />
                <main
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: '20px',
                    }}
                >
                    <Outlet />
                </main>
            </Box>
        </>
    )
}

export default RootLayout
