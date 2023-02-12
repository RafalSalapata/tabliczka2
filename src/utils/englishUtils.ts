import { EnTopicValueType, Phrase } from 'types/enTypes'
import { Sentences } from 'types/appTypes'

export const lazyTestImport = async (testName: EnTopicValueType): Promise<Phrase[]> => {
    const { test } = await import(`assets/english-tests/${testName}`)
    return test
}

export const testTrimer = (test: Phrase[]): Phrase[] => {
    return test.map((item) => ({
        en: item.en.map((word) => word.trim()),
        pl: item.pl.trim(),
        cz: item.cz.trim(),
    }))
}

export const topicToDisplayText = (topic: EnTopicValueType, localization: Sentences): string => {
    let displayText = ''

    const exhaustiveCheck = (x: never) => {
        throw new Error('check if all topic values are listed in the switch below')
    }

    switch (topic) {
        case 'animals':
            displayText = localization.testName.animals
            break
        case 'birthday':
            displayText = localization.testName.birthday
            break
        case 'bodyParts':
            displayText = localization.testName.bodyParts
            break
        case 'clothesEasy':
            displayText = localization.testName.clothesEasy
            break
        case 'clothes':
            displayText = localization.testName.clothes
            break
        case 'colorsEasy':
            displayText = localization.testName.colorsEasy
            break
        case 'colors':
            displayText = localization.testName.colors
            break
        case 'family':
            displayText = localization.testName.family
            break
        case 'house':
            displayText = localization.testName.house
            break
        case 'numbersEasy':
            displayText = localization.testName.numbersEasy
            break
        case 'numbers':
            displayText = localization.testName.numbers
            break
        case 'positions':
            displayText = localization.testName.positions
            break
        case 'time':
            displayText = localization.testName.time
            break
        default:
            exhaustiveCheck(topic)
    }

    return displayText
}
