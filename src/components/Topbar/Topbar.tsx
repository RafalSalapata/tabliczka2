import { AppBar, Theme, Toolbar } from '@mui/material'
import SettingsMenu from './components/SettingsMenu'
import NavbarLogo from './components/TopbarLogo'

const Topbar: React.FC = () => {
    return (
        <AppBar
            component={'header'}
            position='static'
            sx={(theme: Theme) => {
                return {
                    background: theme.palette.background.default,
                    width: '100%',
                    boxShadow: theme.shadows[0],
                    transition: 'background 0.5s linear',
                }
            }}
        >
            <Toolbar
                sx={(theme: Theme) => {
                    return {
                        width: '100%',
                        maxWidth: '860px',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        padding: { xs: '0 6px', sm: '0 12px', md: '0 24px' },
                        height: { xs: '56px', md: '64px' },
                        minHeight: { xs: '56px', md: '64px' },
                        borderBottomColor: theme.palette.primary.main,
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '3px',
                    }
                }}
            >
                <NavbarLogo />
                <SettingsMenu />
            </Toolbar>
        </AppBar>
    )
}

export default Topbar
