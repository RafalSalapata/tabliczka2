import React, { useContext, useEffect, useState } from 'react'
import InputField from 'components/InputField'
import MainButton from 'components/MainButton'
import SectionTitle from 'components/SectionTitle'
import SelectMenu from 'components/SelectMenu'
import SliderInput from 'components/SliderInput'
import { SliderValueType } from 'components/SliderInput/SliderInput'
import MathContext from 'contexts/MathContext'
import AppContext from 'contexts/AppContext'
import { MathRangeType, BasicOperation, basicOperations } from 'types/mathTypes'
import { localStorageKeys } from 'utils/constants'
import { sliderValueToTestLength } from 'utils/appUtils'
import { operationToDisplayText } from 'utils/mathUtils'
import { SelectItem } from 'types/appTypes'

const MathSetup: React.FC = () => {
    const { mathState, mathDispatch } = useContext(MathContext)
    const { appState, appDispatch, localization } = useContext(AppContext)

    const [userName, setUserName] = useState<string>(appState.userName)
    const [incorrectName, setIncorrectName] = useState<boolean>(false)
    const [validateForm, setValidateForm] = useState<boolean>(false)
    const [mathOperation, setMathOperation] = useState<BasicOperation>(mathState.mathOperation)
    const [mathRange, setMathRange] = useState<SliderValueType>(mathState.mathRange)
    const [testLengthSliderValue, setTestLengthSliderValue] = useState<SliderValueType>(
        Number(localStorage.getItem(localStorageKeys.math.SLIDER_VALUE_LENGTH) ?? 10)
    )

    useEffect(() => {
        if (userName.length < 3 || userName.length > 20) {
            setIncorrectName(true)
        } else {
            setIncorrectName(false)
        }
    }, [userName])

    const setMathOperationSelect = (value: string): void => {
        const operation = basicOperations.find((item) => item.itemValue === value)

        if (operation) {
            setMathOperation(operation)
        } else {
            throw new Error('invalid BasicOperation was selected in math select input')
        }
    }

    const onStartBtnClick = (): void => {
        if (incorrectName) {
            setValidateForm(true)
        } else {
            const testLength = sliderValueToTestLength(testLengthSliderValue as number)

            window.localStorage.setItem(localStorageKeys.app.USER_NAME, userName)
            window.localStorage.setItem(
                localStorageKeys.math.OPERATION,
                JSON.stringify(mathOperation)
            )
            window.localStorage.setItem(localStorageKeys.math.RANGE, JSON.stringify(mathRange))
            window.localStorage.setItem(
                localStorageKeys.math.SLIDER_VALUE_LENGTH,
                testLengthSliderValue.toString()
            )
            window.localStorage.setItem(localStorageKeys.math.TEST_LENGTH, testLength.toString())

            appDispatch({ type: 'setUserName', value: userName })
            mathDispatch({ type: 'setMathOperation', value: mathOperation })
            mathDispatch({ type: 'setMathRange', value: mathRange as MathRangeType })
            mathDispatch({ type: 'setTestLength', value: testLength })
        }
    }

    return (
        <>
            <SectionTitle title={localization.setup.settings} />
            <InputField
                value={userName}
                label={localization.setup.yourName}
                setValue={setUserName}
                error={validateForm && incorrectName}
                helperText={
                    validateForm && incorrectName ? localization.setup.incorrectNameMgs : ''
                }
            />
            <SliderInput
                label={localization.setup.numberOfQuestions}
                value={testLengthSliderValue}
                setValue={setTestLengthSliderValue}
                minValue={2}
                maxValue={17}
                scale={sliderValueToTestLength}
            />
            <SelectMenu
                value={mathOperation.itemValue}
                label={localization.setup.operation}
                setValue={setMathOperationSelect}
                itemList={basicOperations.map((operation): SelectItem => {
                    return {
                        itemValue: operation.itemValue,
                        itemText: operationToDisplayText(operation.itemValue, localization),
                    }
                })}
            />
            <SliderInput
                label={localization.setup.range}
                value={mathRange}
                setValue={setMathRange}
                minValue={2}
                maxValue={120}
                minDistance={5}
            />
            <MainButton
                title='Start'
                navigateTo={incorrectName ? '' : mathOperation.path}
                handleClick={onStartBtnClick}
            />
        </>
    )
}

export default MathSetup
