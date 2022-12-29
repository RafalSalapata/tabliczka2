import { Box, Theme } from '@mui/material'
import MainButton from 'components/MainButton'
import SectionTitle from 'components/SectionTitle'

const Home: React.FC = () => {
    return (
        <Box
            sx={(theme: Theme) => {
                return { display: 'flex', flexDirection: 'column', alignItems: 'center' }
            }}
        >
            <SectionTitle title='Menu' />
            <MainButton title='Matematyka' navigateTo='matematyka' />
            <MainButton title='Angielski' navigateTo='angielski' />
            <MainButton title='Ostatnie wyniki' navigateTo='wyniki' />
        </Box>
    )
}

export default Home
