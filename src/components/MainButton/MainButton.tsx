import { Box, Button, Theme } from '@mui/material'
import { Link } from 'react-router-dom'

interface IMainButtonProps {
    title: string
    navigateTo: string
    disabled?: boolean
    imageSrc?: string
    // onClick: () => void
}

const MainButton: React.FC<IMainButtonProps> = ({
    title,
    navigateTo,
    disabled,
    imageSrc,
}: IMainButtonProps) => {
    // const handleClick = () => {
    //     console.log('działa')
    // }

    return (
        <Link
            to={navigateTo}
            style={{
                width: '100%',
                borderRadius: '5px',
                textDecoration: 'none',
            }}
        >
            <Button
                variant='outlined'
                disabled={disabled}
                // onClick={handleClick}
                sx={(theme: Theme) => {
                    return {
                        padding: '5px',
                        height: { xs: 55, sm: 60 },
                        width: '100%',
                        justifyContent: 'left',
                        borderWidth: 2,
                        fontSize: { xs: 18, sm: 24, md: 26 },
                        fontWeight: 600,
                        textTransform: 'none',
                        color: theme.palette.text.primary,
                        backgroundColor: theme.palette.background.paper,
                        overflow: 'hidden',
                        transitionProperty: 'background, color',
                        transitionDuration: '0.3s',
                        transitionTimingFunction: 'linear',
                        '&:hover': {
                            borderWidth: 2,
                        },
                    }
                }}
            >
                <Box
                    sx={{
                        marginLeft: { xs: 1, sm: 3.5 },
                        display: !imageSrc ? 'none' : 'flex',
                        mr: 2,
                    }}
                >
                    <img src={imageSrc} alt='?' width='55px' height='35px' />
                </Box>
                {title}
            </Button>
        </Link>
    )
}

export default MainButton
