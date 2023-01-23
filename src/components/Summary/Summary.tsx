import { useContext } from 'react'
import MathContext from 'contexts/MathContext/MathContext'
import SectionTitle from 'components/SectionTitle'
import { getEndMessage } from 'views/Home/Math/mathOperationsUtils'
import { Typography, Theme } from '@mui/material'
import MainButton from 'components/MainButton'
import AnswersList from 'components/AnswersList'

interface SummaryProps {
    onRestartTestClick: () => void
}

const Summary: React.FC<SummaryProps> = ({ onRestartTestClick }) => {
    const { mathState } = useContext(MathContext)

    const correctAnswerNo = mathState.answerList.filter((answer) => answer.isCorrect).length
    const endMessage = getEndMessage(correctAnswerNo, mathState.testLength)

    return (
        <>
            <SectionTitle title={`${mathState.userName}! Twój wynik to`} />
            <Typography
                variant='h4'
                fontWeight={600}
                sx={(theme: Theme) => {
                    return {
                        mt: '5px',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: { xs: '0px', sm: '12px' },
                        textAlign: 'center',
                        color: theme.palette.text.primary,
                        fontSize: { xs: '28px', sm: '32px' },
                        transition: theme.customTransitions.onThemeChange,
                    }
                }}
            >
                <span>
                    {correctAnswerNo} / {mathState.testLength}
                </span>
                <span>{endMessage}</span>
            </Typography>
            <MainButton navigateTo='' title='Powtórz test' handleClick={onRestartTestClick} />
            <AnswersList />
        </>
    )
}

export default Summary
