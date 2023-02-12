import { useContext } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Breadcrumbs, Theme, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { styled } from '@mui/system'
import AppContext from 'contexts/AppContext'

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
    const { localization } = useContext(AppContext)
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter((x) => x)

    const breadcrumbNameMap: { [key: string]: string } = {
        '/matematyka': localization.home.math,
        '/matematyka/dodawanie': localization.testName.addition,
        '/matematyka/odejmowanie': localization.testName.subtraction,
        '/matematyka/mnozenie': localization.testName.multiplication,
        '/matematyka/dzielenie': localization.testName.division,
        '/angielski': localization.home.english,
        '/angielski/rodzina': localization.testName.family,
        '/angielski/zwierzeta': localization.testName.animals,
        '/angielski/urodziny': localization.testName.birthday,
        '/angielski/ubrania-1': localization.testName.clothesEasy,
        '/angielski/ubrania-2': localization.testName.clothes,
        '/angielski/kolory-1': localization.testName.colorsEasy,
        '/angielski/kolory-2': localization.testName.colors,
        '/angielski/dom': localization.testName.house,
        '/angielski/polozenie': localization.testName.positions,
        '/angielski/liczby-1': localization.testName.numbersEasy,
        '/angielski/liczby-2': localization.testName.numbers,
        '/angielski/czas': localization.testName.time,
        '/wyniki': localization.home.lastResults,
    }

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
