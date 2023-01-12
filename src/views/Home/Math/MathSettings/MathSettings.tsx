import InputField from 'components/InputField'
import MainButton from 'components/MainButton'
import SectionTitle from 'components/SectionTitle'
import SelectMenu from 'components/SelectMenu'
import SliderInput from 'components/SliderInput'
import { SliderValueType } from 'components/SliderInput/SliderInput'
import MathContext from 'contexts/MathContext/MathContext'
import { MathRangeType } from 'contexts/MathContext/MathContextTypes'
import React, { useContext, useState } from 'react'
import { BasicOperation, mathOperations, sliderValueToTestLength } from '../mathOperationsUtils'

const MathSettings: React.FC = () => {
    const { mathState, mathDispatch } = useContext(MathContext)

    const [userName, setUserName] = useState<string>(mathState.userName)
    const [mathOperation, setMathOperation] = useState<BasicOperation>(mathState.mathOperation)
    const [mathRange, setMathRange] = useState<SliderValueType>(mathState.mathRange)
    const [testLengthSliderValue, setTestLengthSliderValue] = useState<SliderValueType>(
        Number(localStorage.getItem('testLengthSliderValue') ?? 10)
    )

    const setMathOperationSelect = (value: string): void => {
        const operation = mathOperations.find((item) => item.itemValue === value)

        if (operation) {
            setMathOperation(operation)
        } else {
            throw new Error("invalid BasicOperation was inserted in 'Działanie' select input")
        }
    }

    const handleStartBtnClick = (): void => {
        window.localStorage.setItem('userName', userName)
        window.localStorage.setItem('mathOperation', JSON.stringify(mathOperation))
        window.localStorage.setItem('mathRange', JSON.stringify(mathRange))
        window.localStorage.setItem('testLengthSliderValue', testLengthSliderValue.toString())

        mathDispatch({ type: 'setUserName', value: userName })
        mathDispatch({ type: 'setMathOperation', value: mathOperation })
        mathDispatch({ type: 'setMathRange', value: mathRange as MathRangeType })
        mathDispatch({
            type: 'setTestLength',
            value: sliderValueToTestLength(testLengthSliderValue as number),
        })
    }

    return (
        <>
            <SectionTitle title='Ustawienia' />
            <InputField value={userName} label='Twoje imię' setValue={setUserName} />
            <SliderInput
                label='Liczba pytań'
                value={testLengthSliderValue}
                setValue={setTestLengthSliderValue}
                minValue={2}
                maxValue={17}
                scale={sliderValueToTestLength}
            />
            <SelectMenu
                value={mathOperation.itemValue}
                label='Działanie'
                setValue={setMathOperationSelect}
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
            <MainButton
                title='Start'
                navigateTo={mathOperation.path}
                handleClick={handleStartBtnClick}
            />
        </>
    )
}

export default MathSettings
