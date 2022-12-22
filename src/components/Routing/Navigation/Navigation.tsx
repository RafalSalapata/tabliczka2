import { Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { styled } from '@mui/system'

const Navigation: React.FC = () => {
    const BreadcrumbLinkStyled = styled(Link)(({ theme }) => {
        return {
            padding: '0px 5px 1px 5px',
            fontSize: 13,
            fontWeight: 500,
            display: 'flex',
            backgroundColor: theme.palette.background.paper,
            borderRadius: '5px',
            color: theme.palette.text.primary,
            '&:hover': {
                color: theme.palette.primary.main,
            },
        }
    })

    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize='small' color='action' />}
            aria-label='breadcrumb'
            sx={{ '& .MuiBreadcrumbs-separator': { mx: 0.5 } }}
        >
            <BreadcrumbLinkStyled underline='none' href='#'>
                Start
            </BreadcrumbLinkStyled>
            <BreadcrumbLinkStyled underline='none' href='#'>
                Matematyka
            </BreadcrumbLinkStyled>
            <Typography color='textPrimary' sx={{ fontSize: '13px' }} fontWeight='bold'>
                Dodawanie pisemne
            </Typography>
        </Breadcrumbs>
    )
}

export default Navigation
