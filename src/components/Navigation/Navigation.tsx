import { Breadcrumbs, Theme, Typography } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { styled } from '@mui/system'

const breadcrumbNameMap: { [key: string]: string } = {
    '/matematyka': 'Matematyka',
    '/matematyka/dodawanie': 'Dodawanie',
    '/angielski': 'Angielski',
    '/angielski/kolory': 'Kolory',
}

const BreadcrumbLinkStyled = styled(RouterLink)(({ theme }) => {
    return {
        padding: '1px 6px 2px 6px',
        fontSize: 12,
        textDecoration: 'none',
        [theme.breakpoints.only('sm')]: {
            fontSize: 13,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 14,
        },
        fontWeight: 500,
        display: 'flex',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '5px',
        color: theme.palette.text.primary,
        '&:hover': {
            color: theme.palette.primary.main,
        },
        transitionProperty: 'background, color',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'linear',
    }
})

const Navigation: React.FC = () => {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x)

    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' color='action' />}
            aria-label='breadcrumb'
            sx={(theme: Theme) => {
                return {
                    my: 0.5,
                    alignSelf: 'flex-start',
                    '& .MuiBreadcrumbs-separator': { mx: { xs: '0', sm: '4px' } },
                    '& .MuiSvgIcon-root': {
                        transition: theme.customTransitions.onThemeChange,
                    },
                }
            }}
        >
            <BreadcrumbLinkStyled color='inherit' to='/'>
                Menu
            </BreadcrumbLinkStyled>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1
                const to = `/${pathnames.slice(0, index + 1).join('/')}`

                return last ? (
                    <Typography
                        color='text.primary'
                        key={to}
                        sx={(theme: Theme) => {
                            return {
                                fontSize: { xs: 13, sm: 14, md: 15 },
                                fontWeight: 600,
                                transition: theme.customTransitions.onThemeChange,
                            }
                        }}
                    >
                        {breadcrumbNameMap[to]}
                    </Typography>
                ) : (
                    <BreadcrumbLinkStyled color='inherit' to={to} key={to}>
                        {breadcrumbNameMap[to]}
                    </BreadcrumbLinkStyled>
                )
            })}
        </Breadcrumbs>
    )
}

export default Navigation
