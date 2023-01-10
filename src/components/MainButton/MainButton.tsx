import { Box, Button, Theme } from '@mui/material'
import { Link } from 'react-router-dom'
import { IMainButtonProps, JustifyContentEnum } from './MainButtonTypes'

const MainButton: React.FC<IMainButtonProps> = ({
    title,
    navigateTo,
    justifyContent,
    disabled,
    imageSrc,
    handleClick,
}: IMainButtonProps) => {
    return (
        <Box
            sx={(theme: Theme) => {
                return {
                    width: '100%',
                    mt: theme.shape.marginTop,
                }
            }}
        >
            <Link
                to={navigateTo}
                style={{ height: '60px', borderRadius: '5px', textDecoration: 'none' }}
            >
                <Button
                    variant='outlined'
                    disabled={disabled}
                    onClick={handleClick}
                    sx={(theme: Theme) => {
                        return {
                            padding: '5px',
                            height: { xs: 55, sm: 60 },
                            width: '100%',
                            justifyContent: justifyContent ?? 'center',
                            borderWidth: 2,
                            fontSize: { xs: 18, sm: 24, md: 26 },
                            fontWeight: 600,
                            textTransform: 'none',
                            color: theme.palette.text.primary,
                            backgroundColor: theme.palette.background.paper,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            transition: theme.customTransitions.onThemeChange,
                            '&:hover': {
                                borderWidth: 2,
                            },
                        }
                    }}
                >
                    <Box
                        sx={{
                            marginLeft:
                                justifyContent === JustifyContentEnum.left ? { xs: 1, sm: 3.5 } : 0,
                            display: !imageSrc ? 'none' : 'flex',
                            mr: 2,
                        }}
                    >
                        <img src={imageSrc} alt='?' width='55px' height='35px' />
                    </Box>
                    {title}
                </Button>
            </Link>
        </Box>
    )
}

export default MainButton
