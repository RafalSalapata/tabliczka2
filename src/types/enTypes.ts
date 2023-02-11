import { SelectItem } from 'types/appTypes'

export const EnTopicValue = {
    animals: 'animals',
    birthday: 'birthday',
    clothesEasy: 'clothesEasy',
    clothes: 'clothes',
    colorsEasy: 'colorsEasy',
    colors: 'colors',
    family: 'family',
    house: 'house',
    numbersEasy: 'numbersEasy',
    numbers: 'numbers',
    positions: 'positions',
    time: 'time',
} as const

export type EnTopicValueType = typeof EnTopicValue[keyof typeof EnTopicValue]

export type EnTopic = SelectItem & {
    itemValue: EnTopicValueType
    readonly path: string
}

export const enTopics: readonly EnTopic[] = [
    { itemValue: EnTopicValue.animals, itemText: 'Zwierzęta', path: 'zwierzeta' },
    { itemValue: EnTopicValue.birthday, itemText: 'Urodziny', path: 'urodziny' },
    { itemValue: EnTopicValue.clothesEasy, itemText: 'Ubrania 1', path: 'ubrania-1' },
    { itemValue: EnTopicValue.clothes, itemText: 'Ubrania 2', path: 'ubrania-2' },
    { itemValue: EnTopicValue.colorsEasy, itemText: 'Kolory 1', path: 'kolory-1' },
    { itemValue: EnTopicValue.colors, itemText: 'Kolory 2', path: 'kolory-2' },
    { itemValue: EnTopicValue.family, itemText: 'Rodzina', path: 'rodzina' },
    { itemValue: EnTopicValue.house, itemText: 'Dom', path: 'dom' },
    { itemValue: EnTopicValue.numbersEasy, itemText: 'Liczby 1-10', path: 'liczby-1' },
    { itemValue: EnTopicValue.numbers, itemText: 'Liczby 1-20', path: 'liczby-2' },
    { itemValue: EnTopicValue.positions, itemText: 'Położenie', path: 'polozenie' },
    { itemValue: EnTopicValue.time, itemText: 'Czas', path: 'czas' },
] as const

// arg below is comming from local storage hence we don't know its type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isEnTopic = (arg: any): arg is EnTopic => {
    const value = arg.itemValue
    const text = arg.itemText
    const path = arg.path

    const propsCheck = (topic: EnTopic): boolean => {
        return topic.itemValue === value && topic.itemText === text && topic.path === path
    }

    return enTopics.map((topic) => propsCheck(topic)).some((x) => x)
}

export type Phrase = {
    en: string[]
    pl: string
    cz: string
}

export type EnAnswer = {
    id: number
    phrase: Phrase
    answer: string
    isCorrect: boolean
}

export type EnStateType = {
    testLength: number
    topic: EnTopic
    answerList: EnAnswer[]
    startTime: number
}

export type EnContextType = {
    enState: EnStateType
    enDispatch: React.Dispatch<EnReducerAction>
}

export type EnReducerAction =
    | { type: 'setTopic'; value: EnTopic }
    | { type: 'setTestLength'; value: number }
    | { type: 'addAnswer'; value: EnAnswer }
    | { type: 'clearAnswerList' }
    | { type: 'setStartTime' }

export type EnTest = {
    topic: EnTopic
    answerList: EnAnswer[]
}
