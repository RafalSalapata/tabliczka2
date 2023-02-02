import { useContext, useEffect } from 'react'
import { Typography, Theme } from '@mui/material'
// import { addDoc, Timestamp } from 'firebase/firestore'
// import { recordsCollection, RecordType } from 'firebase-config'
import MathContext from 'contexts/MathContext'
import SectionTitle from 'components/SectionTitle'
import MainButton from 'components/MainButton'
import AnswersList from 'components/AnswersList'
import { getEndMessage } from 'utils/appUtils'
import EnContext from 'contexts/EnContext'
import AnswersListEn from 'components/AnswersListEn'

// const createRecord = async (record: RecordType) => {
//     await addDoc<RecordType>(recordsCollection, record)
// }

interface SummaryProps {
    testType: string
    onRestartTestClick: () => void
}

const Summary: React.FC<SummaryProps> = ({ testType, onRestartTestClick }) => {
    const { mathState } = useContext(MathContext)
    const { enState } = useContext(EnContext)

    const isMath = testType === 'math'
    const state = isMath ? mathState : enState
    const correctAnswerNo = isMath
        ? mathState.answerList.filter((answer) => answer.isCorrect).length
        : enState.answerList.filter((answer) => answer.isCorrect).length

    const endMessage = getEndMessage(correctAnswerNo, state.testLength)

    // useEffect(() => {
    //     const testStartTime = isMath ? mathState.testStartTime : enState.startTime
    //     const duration: number = Date.now() - testStartTime

    //     const record: RecordType = {
    //         answerList: state.answerList,
    //         correctAnswerNo: correctAnswerNo,
    //         createdAt: Timestamp.fromDate(new Date()),
    //         testCategory: testType,
    //         testDuration: duration,
    //         testLength: state.testLength,
    //         testType: isMath ? mathState.mathOperation : null,
    //         testRange: isMath ? mathState.mathRange : null,
    //         topic: isMath ? null : enState.topic,
    //         userName: state.userName,
    //     }

    //     createRecord(record)
    // }, [
    //     correctAnswerNo,
    //     enState.startTime,
    //     enState.topic,
    //     isMath,
    //     mathState.mathOperation,
    //     mathState.mathRange,
    //     mathState.testStartTime,
    //     state.answerList,
    //     state.testLength,
    //     state.userName,
    //     testType,
    // ])

    return (
        <>
            <SectionTitle title={`${state.userName}! Twój wynik to`} />
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
                    {correctAnswerNo} / {state.testLength}
                </span>
                <span>{endMessage}</span>
            </Typography>
            <MainButton navigateTo='' title='Powtórz test' handleClick={onRestartTestClick} />
            {isMath ? (
                <AnswersList
                    answerList={mathState.answerList}
                    operationSign={mathState.mathOperation.sign}
                />
            ) : (
                <AnswersListEn answerList={enState.answerList} />
            )}
        </>
    )
}

export default Summary
