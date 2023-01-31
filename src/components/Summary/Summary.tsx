import { useContext, useEffect } from 'react'
import { Typography, Theme } from '@mui/material'
import { addDoc, Timestamp } from 'firebase/firestore'
import { recordsCollection, RecordType } from 'firebase-config'
import MathContext from 'contexts/MathContext'
import SectionTitle from 'components/SectionTitle'
import MainButton from 'components/MainButton'
import AnswersList from 'components/AnswersList'
import { getEndMessage } from 'utils/appUtils'

const createRecord = async (record: RecordType) => {
    await addDoc<RecordType>(recordsCollection, record)
}

interface SummaryProps {
    onRestartTestClick: () => void
}

const Summary: React.FC<SummaryProps> = ({ onRestartTestClick }) => {
    const { mathState } = useContext(MathContext)

    const correctAnswerNo = mathState.answerList.filter((answer) => answer.isCorrect).length
    const endMessage = getEndMessage(correctAnswerNo, mathState.testLength)

    useEffect(() => {
        const duration: number = Date.now() - mathState.testStartTime

        const record: RecordType = {
            answerList: mathState.answerList,
            correctAnswerNo: correctAnswerNo,
            createdAt: Timestamp.fromDate(new Date()),
            testCategory: 'math',
            testDuration: duration,
            testLength: mathState.testLength,
            testType: mathState.mathOperation,
            testRange: mathState.mathRange,
            userName: mathState.userName,
        }

        createRecord(record)
    }, [
        correctAnswerNo,
        mathState.answerList,
        mathState.mathOperation,
        mathState.mathRange,
        mathState.testLength,
        mathState.testStartTime,
        mathState.userName,
    ])

    return (
        <>
            <SectionTitle title={`${mathState.userName}! Twój wynik to`} />
            <Typography
                variant='h4'
                fontWeight={600}
                sx={(theme: Theme) => ({
                    mt: '5px',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: '0px', sm: '12px' },
                    textAlign: 'center',
                    color: theme.palette.text.primary,
                    fontSize: { xs: '28px', sm: '32px' },
                    transition: theme.customTransitions.onThemeChange,
                })}
            >
                <span>
                    {correctAnswerNo} / {mathState.testLength}
                </span>
                <span>{endMessage}</span>
            </Typography>
            <MainButton navigateTo='' title='Powtórz test' handleClick={onRestartTestClick} />
            <AnswersList
                answerList={mathState.answerList}
                operationSign={mathState.mathOperation.sign}
            />
        </>
    )
}

export default Summary
