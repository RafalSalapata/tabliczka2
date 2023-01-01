import { Box, Theme } from '@mui/material'
import MainButton from 'components/MainButton'
import SectionTitle from 'components/SectionTitle'

const Home: React.FC = () => {
    return (
        <Box
            sx={(theme: Theme) => {
                return {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: { xs: '25px', sm: '30px' },
                    width: 'min(100%, 400px)',
                }
            }}
        >
            <SectionTitle title='Menu' />
            <MainButton
                title='Matematyka'
                navigateTo='matematyka'
                imageSrc='assets/math-button.png'
            />
            <MainButton
                title='Angielski'
                navigateTo='angielski'
                imageSrc='assets/english-button.png'
            />
            <MainButton
                title='Ortografia (wkrótce)'
                navigateTo=''
                disabled={true}
                imageSrc='assets/spelling-button.png'
            />
            <MainButton
                title='Ostatnie wyniki'
                navigateTo='wyniki'
                imageSrc='assets/results-button.png'
            />
        </Box>
    )
}

export default Home
