import { Button, Theme } from '@mui/material'
import { Link } from 'react-router-dom'

interface IMainButtonProps {
    title: string
    navigateTo: string
    // onClick: () => void
}

const MainButton: React.FC<IMainButtonProps> = ({ title, navigateTo }: IMainButtonProps) => {
    // const handleClick = () => {
    //     console.log('działa')
    // }

    return (
        <Link
            to={navigateTo}
            style={{ margin: '15px', width: 'min(100%, 400px)', borderRadius: '5px' }}
        >
            <Button
                variant='outlined'
                // onClick={handleClick}
                sx={(theme: Theme) => {
                    return {
                        padding: '5px',
                        height: 60,
                        width: 'min(100%, 400px)',
                        borderWidth: 2,
                        fontSize: 26,
                        fontWeight: 600,
                        textTransform: 'none',
                        textDecoration: 'none',
                        color: theme.palette.text.primary,
                        backgroundColor: theme.palette.background.paper,
                        transitionProperty: 'background, color',
                        transitionDuration: '0.3s',
                        transitionTimingFunction: 'linear',
                        '&:hover': {
                            borderWidth: 2,
                        },
                    }
                }}
            >
                {title}
            </Button>
        </Link>
    )
}

export default MainButton
