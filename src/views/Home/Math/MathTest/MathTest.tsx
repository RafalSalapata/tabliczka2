import { Box, TextField, Typography } from '@mui/material'
import MainButton from 'components/MainButton'
import SectionTitle from 'components/SectionTitle'
import Summary from 'components/Summary'
import MathContext from 'contexts/MathContext/MathContext'
import { MathAnswer } from 'contexts/MathContext/MathContextTypes'
import { ChangeEvent, KeyboardEvent, useContext, useEffect, useRef, useState } from 'react'
import { getCorrectAnswer, getFactors } from '../mathOperationsUtils'

const MathTest: React.FC = () => {
    const { mathState, mathDispatch } = useContext(MathContext)

    const inputRef = useRef<HTMLInputElement>(null)

    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [currentAnswer, setCurrentAnswer] = useState<string>('')
    const [factors, setFactors] = useState<[number, number]>([0, 0])
    const [displaySummary, setDisplaySummary] = useState<boolean>(false)

    useEffect(() => {
        mathDispatch({ type: 'clearAnswerList' })
    }, [mathDispatch])

    useEffect(() => {
        setFactors(
            getFactors(
                mathState.mathRange[0],
                mathState.mathRange[1],
                mathState.mathOperation.itemValue
            )
        )
    }, [currentQuestion, mathState.mathOperation.itemValue, mathState.mathRange])

    const onNextClick = () => {
        const correctAnswer = getCorrectAnswer(factors, mathState.mathOperation)

        const answer: MathAnswer = {
            id: currentQuestion,
            factors: factors,
            correctAnswer: correctAnswer,
            answer: +currentAnswer,
            isCorrect: correctAnswer === +currentAnswer,
        }

        mathDispatch({ type: 'addAnswer', value: answer })
        setCurrentAnswer('')

        if (currentQuestion < mathState.testLength) {
            setCurrentQuestion((prev) => prev + 1)
            inputRef.current?.focus()
        } else {
            setDisplaySummary(true)
        }
    }

    const onRestartTestClick = (): void => {
        mathDispatch({ type: 'clearAnswerList' })
        setCurrentQuestion(1)
        setDisplaySummary(false)
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.validity.badInput) {
            setCurrentAnswer(e.target.value)
        }
    }

    const onEnterUp = (e: KeyboardEvent) => {
        if (e.key === 'Enter' && currentAnswer !== '') onNextClick()
    }

    return !displaySummary ? (
        <>
            <SectionTitle title={`Pytanie nr ${currentQuestion}`} />
            <Box
                sx={{
                    marginTop: '10px',
                    marginX: 'auto',
                    width: '100%',
                    minHeight: '290px',
                    backgroundImage: 'url(assets/tabularasa3.png)',
                    backgroundSize: '100% 100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    variant='h4'
                    sx={{
                        color: 'white',
                        fontFamily: 'Just Me Again Down Here',
                        textAlign: 'center',
                        marginTop: '45px',
                    }}
                >
                    Ile wynosi: {factors[1]}
                    {mathState.mathOperation.sign}
                    {factors[0]}?
                </Typography>
                <TextField
                    type='number'
                    value={currentAnswer}
                    autoFocus
                    autoComplete='off'
                    onChange={onInputChange}
                    onKeyUp={onEnterUp}
                    inputRef={inputRef}
                    inputProps={{
                        sx: {
                            fontFamily: 'Just Me Again Down Here',
                            fontSize: '40px',
                            color: 'white',
                            paddingTop: '0px',
                            paddingBottom: '5px',
                            textAlign: 'center',
                        },
                    }}
                    sx={{
                        mt: '20px',
                        width: '150px',
                        fontSize: '34px',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#7ac297',
                            },
                        },
                        'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
                            WebkitAppearance: 'none',
                            margin: 0,
                        },
                        "input[type='number']": {
                            MozAppearance: 'textfield',
                        },
                    }}
                />
            </Box>
            <MainButton
                title='Następne pytanie'
                navigateTo=''
                disabled={currentAnswer === '' ? true : false}
                handleClick={onNextClick}
            ></MainButton>
        </>
    ) : (
        <Summary onRestartTestClick={onRestartTestClick} />
    )
}

export default MathTest
