import { useContext } from 'react'
import { Box } from '@mui/material'
import AppContext from 'contexts/AppContext'
import { JustifyContentEnum } from 'types/appTypes'
import MainButton from 'components/MainButton'
import SectionTitle from 'components/SectionTitle'

const Home: React.FC = () => {
    const { localization } = useContext(AppContext)

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <SectionTitle title={localization.home.lesson} />
            <MainButton
                title={localization.home.math}
                navigateTo='matematyka'
                imageSrc='assets/math-button.png'
                justifyContent={JustifyContentEnum.left}
            />
            <MainButton
                title={localization.home.english}
                navigateTo='angielski'
                imageSrc='assets/english-button.png'
                justifyContent={JustifyContentEnum.left}
            />
            <MainButton
                title={localization.home.spelling}
                navigateTo=''
                disabled={true}
                imageSrc='assets/spelling-button.png'
                justifyContent={JustifyContentEnum.left}
            />
            <MainButton
                title={localization.home.lastResults}
                navigateTo='wyniki'
                imageSrc='assets/results-button.png'
                justifyContent={JustifyContentEnum.left}
            />
        </Box>
    )
}

export default Home
