export const EnTopicValue = {
    animals: 'animals',
    birthday: 'birthday',
    bodyParts: 'bodyParts',
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
    unit4: 'unit4',
} as const

export type EnTopicValueType = typeof EnTopicValue[keyof typeof EnTopicValue]

export type EnTopic = {
    itemValue: EnTopicValueType
    readonly path: string
}

export const enTopics: readonly EnTopic[] = [
    { itemValue: EnTopicValue.animals, path: 'zwierzeta' },
    { itemValue: EnTopicValue.birthday, path: 'urodziny' },
    { itemValue: EnTopicValue.bodyParts, path: 'czesci-ciala' },
    { itemValue: EnTopicValue.clothesEasy, path: 'ubrania-1' },
    { itemValue: EnTopicValue.clothes, path: 'ubrania-2' },
    { itemValue: EnTopicValue.colorsEasy, path: 'kolory-1' },
    { itemValue: EnTopicValue.colors, path: 'kolory-2' },
    { itemValue: EnTopicValue.family, path: 'rodzina' },
    { itemValue: EnTopicValue.house, path: 'dom' },
    { itemValue: EnTopicValue.numbersEasy, path: 'liczby-1' },
    { itemValue: EnTopicValue.numbers, path: 'liczby-2' },
    { itemValue: EnTopicValue.positions, path: 'polozenie' },
    { itemValue: EnTopicValue.time, path: 'czas' },
    { itemValue: EnTopicValue.unit4, path: 'unit4' },
] as const

// arg below is comming from local storage hence we don't know its type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isEnTopic = (arg: any): arg is EnTopic => {
    const value = arg.itemValue
    const path = arg.path

    const propsCheck = (topic: EnTopic): boolean => {
        return topic.itemValue === value && topic.path === path
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
