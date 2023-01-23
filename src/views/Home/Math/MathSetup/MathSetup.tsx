import InputField from 'components/InputField'
import MainButton from 'components/MainButton'
import SectionTitle from 'components/SectionTitle'
import SelectMenu from 'components/SelectMenu'
import SliderInput from 'components/SliderInput'
import { SliderValueType } from 'components/SliderInput/SliderInput'
import MathContext from 'contexts/MathContext/MathContext'
import { MathRangeType } from 'contexts/MathContext/MathContextTypes'
import React, { useContext, useEffect, useState } from 'react'
import { localStorageKeys } from 'utils/constants'
import { BasicOperation, mathOperations, sliderValueToTestLength } from '../mathOperationsUtils'

const MathSetup: React.FC = () => {
    const { mathState, mathDispatch } = useContext(MathContext)

    const [userName, setUserName] = useState<string>(mathState.userName)
    const [inputError, setInputError] = useState<boolean>(false)
    const [validateForm, setValidateForm] = useState<boolean>(false)
    const [mathOperation, setMathOperation] = useState<BasicOperation>(mathState.mathOperation)
    const [mathRange, setMathRange] = useState<SliderValueType>(mathState.mathRange)
    const [testLengthSliderValue, setTestLengthSliderValue] = useState<SliderValueType>(
        Number(localStorage.getItem(localStorageKeys.TEST_LENGTH_SLIDER_VALUE_KEY) ?? 10)
    )

    useEffect(() => {
        if (userName.length < 3 || userName.length > 20) {
            setInputError(true)
        } else {
            setInputError(false)
        }
    }, [userName])

    const setMathOperationSelect = (value: string): void => {
        const operation = mathOperations.find((item) => item.itemValue === value)

        if (operation) {
            setMathOperation(operation)
        } else {
            throw new Error("invalid BasicOperation was inserted in 'Działanie' select input")
        }
    }

    const handleStartBtnClick = (): void => {
        if (inputError) {
            setValidateForm(true)
        } else {
            const testLength = sliderValueToTestLength(testLengthSliderValue as number)

            window.localStorage.setItem(localStorageKeys.USER_NAME_KEY, userName)
            window.localStorage.setItem(
                localStorageKeys.MATH_OPERATION_KEY,
                JSON.stringify(mathOperation)
            )
            window.localStorage.setItem(localStorageKeys.MATH_RANGE_KEY, JSON.stringify(mathRange))
            window.localStorage.setItem(
                localStorageKeys.TEST_LENGTH_SLIDER_VALUE_KEY,
                testLengthSliderValue.toString()
            )
            window.localStorage.setItem(localStorageKeys.TEST_LENGTH_KEY, testLength.toString())

            mathDispatch({ type: 'setUserName', value: userName })
            mathDispatch({ type: 'setMathOperation', value: mathOperation })
            mathDispatch({ type: 'setMathRange', value: mathRange as MathRangeType })
            mathDispatch({ type: 'setTestLength', value: testLength })
        }
    }

    return (
        <>
            <SectionTitle title='Ustawienia' />
            <InputField
                value={userName}
                label='Twoje imię'
                setValue={setUserName}
                error={validateForm && inputError}
                helperText={validateForm && inputError ? 'Imię musi mieć od 3 do 20 znaków' : ''}
            />
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
                navigateTo={inputError ? '' : mathOperation.path}
                handleClick={handleStartBtnClick}
            />
        </>
    )
}

export default MathSetup
