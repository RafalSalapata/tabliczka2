import { ChangeEvent, useContext, useEffect, useRef, useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import MainButton from 'components/MainButton'
import SectionTitle from 'components/SectionTitle'
import Summary from 'components/Summary'
import AppContext from 'contexts/AppContext'
import EnContext from 'contexts/EnContext'
import { TestCategoryType } from 'types/appTypes'
import { EnAnswer, Phrase } from 'types/enTypes'
import { lazyTestImport } from 'utils/englishUtils'

const EnglishTest: React.FC = () => {
    const { enState, enDispatch } = useContext(EnContext)
    const { appState, localization } = useContext(AppContext)

    const inputRef = useRef<HTMLInputElement>(null)

    const [currentQuestion, setCurrentQuestion] = useState<number>(1)
    const [testLength, setTestLength] = useState<number>(enState.testLength)
    const [userAnswer, setUserAnswer] = useState<string>('')
    const [phrases, setPhrases] = useState<Phrase[]>([])
    const [currentPhrase, setCurrentPhrase] = useState<Phrase | undefined>(undefined)
    const [displaySummary, setDisplaySummary] = useState<boolean>(false)
    const [errMsg, setErrMsg] = useState<string>('')

    useEffect(() => {
        enDispatch({ type: 'clearAnswerList' })
        enDispatch({ type: 'setStartTime' })
    }, [enDispatch])

    useEffect(() => {
        setCurrentPhrase(phrases[currentQuestion - 1])
    }, [phrases, currentQuestion])

    useEffect(() => {
        lazyTestImport(enState.topic.itemValue)
            .then((test) => test.sort(() => Math.random() - 0.5))
            .then((shuffledTest) => {
                const testLength = Math.min(shuffledTest.length, enState.testLength)
                setTestLength(testLength)
                enDispatch({ type: 'setTestLength', value: testLength })
                setPhrases(shuffledTest)
            })
            .catch((error) => {
                setErrMsg(localization.test.lazyLoadingError)
                throw new Error(error)
            })
        // we don't want to load it again when language is changed
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enState.topic.itemValue, enState.testLength, enDispatch])

    const onNextClick = () => {
        if (currentPhrase === undefined) {
            throw new Error('Current phrase is undefined. Please check this.')
        }

        const trimedAnswer = userAnswer.trim()
        const enAnswer: EnAnswer = {
            id: currentQuestion,
            phrase: currentPhrase,
            answer: trimedAnswer,
            isCorrect: !!currentPhrase.en.find((item) => item === trimedAnswer),
        }

        enDispatch({ type: 'addAnswer', value: enAnswer })
        setUserAnswer('')

        if (currentQuestion < testLength) {
            setCurrentQuestion((prev) => prev + 1)
            inputRef.current?.focus()
        } else {
            setDisplaySummary(true)
        }
    }

    const onRestartTestClick = (): void => {
        enDispatch({ type: 'clearAnswerList' })
        setCurrentQuestion(1)
        setDisplaySummary(false)
        setPhrases((prev) => prev.sort(() => Math.random() - 0.5))
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.validity.badInput) {
            setUserAnswer(e.target.value)
        }
    }

    const onEnterUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && userAnswer !== '') onNextClick()
    }

    return !displaySummary ? (
        errMsg ? (
            <Typography variant='h5'>{errMsg}</Typography>
        ) : (
            <>
                <SectionTitle title={`${localization.test.questionNo} ${currentQuestion}`} />
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
                            marginTop: '40px',
                            lineHeight: 1,
                        }}
                    >
                        {localization.test.translate}
                        <br />
                        {appState.language === 'pl' ? currentPhrase?.pl : currentPhrase?.cz}
                    </Typography>
                    <TextField
                        type='text'
                        value={userAnswer}
                        autoFocus
                        onChange={onInputChange}
                        onKeyUp={onEnterUp}
                        inputRef={inputRef}
                        inputProps={{
                            autoCapitalize: 'none',
                            autoCorrect: 'none',
                            autoComplete: 'off',
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
                            mt: '10px',
                            width: '78%',
                            fontSize: '32px',
                            '& .MuiOutlinedInput-root': {
                                paddingX: 0.5,
                                paddingY: 1,
                                '& fieldset': {
                                    borderColor: '#7ac297',
                                },
                            },
                            '& .MuiInputBase-input': {
                                overflow: 'hidden',
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
                    title={localization.test.nextQuestion}
                    navigateTo=''
                    disabled={userAnswer === ''}
                    handleClick={onNextClick}
                ></MainButton>
            </>
        )
    ) : (
        <Summary testCategory={TestCategoryType.english} onRestartTestClick={onRestartTestClick} />
    )
}

export default EnglishTest
