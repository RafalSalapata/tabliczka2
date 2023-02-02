import { useContext, useEffect, useState } from 'react'
import InputField from 'components/InputField'
import MainButton from 'components/MainButton'
import SectionTitle from 'components/SectionTitle'
import SelectMenu from 'components/SelectMenu'
import SliderInput from 'components/SliderInput'
import { SliderValueType } from 'components/SliderInput/SliderInput'
import EnContext from 'contexts/EnContext'
import { sliderValueToTestLength } from 'utils/appUtils'
import { localStorageKeys } from 'utils/constants'
import { EnTopic, enTopics } from 'types/enTypes'

const EnglishSetup: React.FC = () => {
    const { enState, enDispatch } = useContext(EnContext)

    const [userName, setUserName] = useState<string>(enState.userName)
    const [topic, setTopic] = useState<EnTopic>(enState.topic)
    const [incorrectName, setIncorrectName] = useState<boolean>(false)
    const [validateForm, setValidateForm] = useState<boolean>(false)
    const [testLengthSliderValue, setTestLengthSliderValue] = useState<SliderValueType>(
        Number(localStorage.getItem(localStorageKeys.english.SLIDER_VALUE_LENGTH) ?? 10)
    )

    useEffect(() => {
        if (userName.length < 3 || userName.length > 20) {
            setIncorrectName(true)
        } else {
            setIncorrectName(false)
        }
    }, [userName])

    const setTopicSelect = (value: string): void => {
        const selectedTopic = enTopics.find((item) => item.itemValue === value)

        if (selectedTopic) {
            setTopic(selectedTopic)
        } else {
            throw new Error("invalid topic was selected in 'Temat' select input")
        }
    }

    const onStartBtnClick = (): void => {
        if (incorrectName) {
            setValidateForm(true)
        } else {
            const testLength = sliderValueToTestLength(testLengthSliderValue as number)

            window.localStorage.setItem(localStorageKeys.app.USER_NAME, userName)
            window.localStorage.setItem(localStorageKeys.english.TOPIC, JSON.stringify(topic))
            window.localStorage.setItem(
                localStorageKeys.english.SLIDER_VALUE_LENGTH,
                testLengthSliderValue.toString()
            )
            window.localStorage.setItem(localStorageKeys.english.TEST_LENGTH, testLength.toString())

            enDispatch({ type: 'setUserName', value: userName })
            enDispatch({ type: 'setTopic', value: topic })
            enDispatch({ type: 'setTestLength', value: testLength })
        }
    }

    return (
        <>
            <SectionTitle title='Ustawienia' />
            <InputField
                value={userName}
                label='Twoje imię'
                setValue={setUserName}
                error={validateForm && incorrectName}
                helperText={validateForm && incorrectName ? 'Imię musi mieć od 3 do 20 znaków' : ''}
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
                value={topic.itemValue}
                label='Działanie'
                setValue={setTopicSelect}
                itemList={enTopics}
            />
            <MainButton
                title='Start'
                navigateTo={incorrectName ? '' : topic.path}
                handleClick={onStartBtnClick}
            />
        </>
    )
}

export default EnglishSetup
