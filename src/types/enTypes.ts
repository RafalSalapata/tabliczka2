import { SelectItem } from 'types/appTypes'

export const EnTopicValue = {
    animals: 'animals',
    clothes: 'clothes',
} as const

export type EnTopicValueType = typeof EnTopicValue[keyof typeof EnTopicValue]

export type EnTopic = SelectItem & {
    itemValue: EnTopicValueType
    readonly path: string
}

export const enTopics: readonly EnTopic[] = [
    { itemValue: EnTopicValue.animals, itemText: 'Zwierzęta', path: 'zwierzeta' },
    { itemValue: EnTopicValue.clothes, itemText: 'Ubrania', path: 'ubrania' },
] as const

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

///////////////////
// EnContextType //
///////////////////
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
    userName: string
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
    | { type: 'setUserName'; value: string }
    | { type: 'setTopic'; value: EnTopic }
    | { type: 'setTestLength'; value: number }
    | { type: 'addAnswer'; value: EnAnswer }
    | { type: 'clearAnswerList' }
    | { type: 'setStartTime' }
