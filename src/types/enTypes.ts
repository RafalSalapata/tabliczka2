import { SelectItem } from 'types/appTypes'

export type EnTopic = SelectItem & {
    readonly path: string
}

export const enTopics: readonly EnTopic[] = [
    { itemValue: 'animals', itemText: 'Zwierzęta', path: 'zwierzeta' },
    { itemValue: 'clothes', itemText: 'Ubrania', path: 'ubrania' },
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
export type Fraze = {
    pl: string
    en: string
}

export type EnAnswer = {
    id: number
    frase: Fraze
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
