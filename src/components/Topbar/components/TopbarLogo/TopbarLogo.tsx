import { Button, Typography, ImageList, ImageListItem } from '@mui/material'

const TopbarLogo: React.FC = () => {
    return (
        <Button
            sx={{
                color: 'white',
                padding: '3px 0px',
                display: 'flex',
                alignItems: 'center',
                height: { xs: '52px', md: '60px' },
            }}
        >
            <ImageList
                sx={{
                    height: { xs: '38px', sm: '43px', md: '48px' },
                    width: { xs: '38px', sm: '43px', md: '48px' },
                }}
                cols={1}
            >
                <ImageListItem>
                    <img src='assets/Numeracy.svg' srcSet='assets/Numeracy.svg' alt='Tabliczka' />
                </ImageListItem>
            </ImageList>
            <Typography
                fontFamily='Just Me Again Down Here'
                // fontFamily='Splash'
                color='primary'
                sx={{
                    ml: 1.5,
                    fontSize: { xs: '1.7rem', sm: '2.5rem', md: '3rem' },
                    // fontSize: { xs: '1rem', sm: '1.4rem', md: '1.6rem' },
                    textShadow: '1px 1px 1px black',
                }}
            >
                TABLICZKA
            </Typography>
        </Button>
    )
}

export default TopbarLogo
