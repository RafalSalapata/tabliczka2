import { useContext, useEffect } from 'react'
import { Typography, Theme } from '@mui/material'
import { addDoc, Timestamp } from 'firebase/firestore'
import { recordsCollection } from 'firebase-config'
import MathContext from 'contexts/MathContext'
import EnContext from 'contexts/EnContext'
import SectionTitle from 'components/SectionTitle'
import MainButton from 'components/MainButton'
import AnswersList from 'components/AnswersList'
import AnswersListEn from 'components/AnswersListEn'
import { getEndMessage } from 'utils/appUtils'
import { MathTest } from 'types/mathTypes'
import { EnTest } from 'types/enTypes'
import { RecordType, TestCategoryType } from 'types/appTypes'

const createRecord = async (record: RecordType): Promise<void> => {
    await addDoc<RecordType>(recordsCollection, record)
}

interface SummaryProps {
    testCategory: TestCategoryType
    onRestartTestClick: () => void
}

const Summary: React.FC<SummaryProps> = ({ testCategory, onRestartTestClick }) => {
    const { mathState } = useContext(MathContext)
    const { enState } = useContext(EnContext)

    const isMath = testCategory === TestCategoryType.math
    const state = isMath ? mathState : enState
    const correctAnswerNo = isMath
        ? mathState.answerList.filter((answer) => answer.isCorrect).length
        : enState.answerList.filter((answer) => answer.isCorrect).length

    const endMessage = getEndMessage(correctAnswerNo, state.testLength)

    useEffect(() => {
        const testStartTime = isMath ? mathState.testStartTime : enState.startTime
        const duration: number = Date.now() - testStartTime

        const mathTest: MathTest | null = isMath
            ? {
                  basicOperation: mathState.mathOperation,
                  range: mathState.mathRange,
                  answerList: mathState.answerList,
              }
            : null

        const enTest: EnTest | null = isMath
            ? null
            : {
                  topic: enState.topic,
                  answerList: enState.answerList,
              }

        const record: RecordType = {
            userName: state.userName,
            testCategory: testCategory,
            createdAt: Timestamp.fromDate(new Date()),
            testDuration: duration,
            testLength: state.testLength,
            correctAnswerNo: correctAnswerNo,
            mathTest: mathTest,
            enTest: enTest,
        }

        createRecord(record)
    }, [
        correctAnswerNo,
        enState.answerList,
        enState.startTime,
        enState.topic,
        isMath,
        mathState.answerList,
        mathState.mathOperation,
        mathState.mathRange,
        mathState.testStartTime,
        state.testLength,
        state.userName,
        testCategory,
    ])

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
