import InputField from 'components/InputField'
import MainButton from 'components/MainButton'
import SectionTitle from 'components/SectionTitle'
import SelectMenu from 'components/SelectMenu'
import SliderInput from 'components/SliderInput'
import { SliderValueType } from 'components/SliderInput/SliderInput'
import MathContext from 'contexts/MathContext/MathContext'
import { MathRangeType } from 'contexts/MathContext/MathContextTypes'
import React, { useContext, useState } from 'react'
import { SelectItem } from 'components/SelectMenu/SelectMenu'

const mathOperations: SelectItem[] = [
    { itemValue: 'addition', itemText: 'Dodawanie' },
    { itemValue: 'subtraction', itemText: 'Odejmowanie' },
    { itemValue: 'multiplication', itemText: 'Mnożenie' },
    { itemValue: 'division', itemText: 'Dzielenie' },
]

const mathNumberOfQuestionsScale = (value: number): number => {
    if (value <= 10) {
        return value
    } else if (value <= 15) {
        return 2 * (value - 10) + 10
    } else {
        return 5 * (value - 15) + 15
    }
}

const MathSettings: React.FC = () => {
    const { mathState, mathDispatch } = useContext(MathContext)

    const [userName, setUserName] = useState<string>(mathState.userName)
    const [mathOperation, setMathOperation] = useState<string>(mathState.mathOperation)
    const [mathRange, setMathRange] = useState<SliderValueType>(mathState.mathRange)
    const [numberOfQuestions, setNumberOfQuestions] = useState<SliderValueType>(
        mathState.numberOfQuestions
    )

    const handleStartBtnClick = (): void => {
        window.localStorage.setItem('userName', userName)
        window.localStorage.setItem('mathOperation', mathOperation)
        window.localStorage.setItem('mathRange', JSON.stringify(mathRange))
        window.localStorage.setItem('numberOfQuestions', numberOfQuestions.toString())

        mathDispatch({ type: 'setUserName', value: userName })
        mathDispatch({ type: 'setMathOperation', value: mathOperation })
        mathDispatch({ type: 'setMathRange', value: mathRange as MathRangeType })
        mathDispatch({
            type: 'setNumberOfQuestion',
            value: mathNumberOfQuestionsScale(numberOfQuestions as number),
        })
    }

    return (
        <>
            <SectionTitle title='Ustawienia' />
            <InputField value={userName} label='Twoje imię' setValue={setUserName} />
            <SliderInput
                label='Liczba pytań'
                value={numberOfQuestions}
                setValue={setNumberOfQuestions}
                minValue={2}
                maxValue={18}
                scale={mathNumberOfQuestionsScale}
            />
            <SelectMenu
                value={mathOperation}
                label='Działanie'
                setValue={setMathOperation}
                itemList={mathOperations}
            />
            <SliderInput
                label='Zakres'
                value={mathRange}
                setValue={setMathRange}
                minValue={2}
                maxValue={120}
                minDistance={5}
            />
            <MainButton title='Start' navigateTo='dodawanie' handleClick={handleStartBtnClick} />
        </>
    )
}

export default MathSettings
