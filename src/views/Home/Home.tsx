import { Box } from '@mui/material'
import MainButton from 'components/MainButton'
import { JustifyContentEnum } from 'components/MainButton/MainButtonTypes'
import SectionTitle from 'components/SectionTitle'

const Home: React.FC = () => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <SectionTitle title='Wybierz lekcję' />
            <MainButton
                title='Matematyka'
                navigateTo='matematyka'
                imageSrc='assets/math-button.png'
                justifyContent={JustifyContentEnum.left}
            />
            <MainButton
                title='Angielski'
                navigateTo='angielski'
                imageSrc='assets/english-button.png'
                justifyContent={JustifyContentEnum.left}
            />
            <MainButton
                title='Ortografia (wkrótce)'
                navigateTo=''
                disabled={true}
                imageSrc='assets/spelling-button.png'
                justifyContent={JustifyContentEnum.left}
            />
            <MainButton
                title='Ostatnie wyniki'
                navigateTo='wyniki'
                imageSrc='assets/results-button.png'
                justifyContent={JustifyContentEnum.left}
            />
        </Box>
    )
}

export default Home
