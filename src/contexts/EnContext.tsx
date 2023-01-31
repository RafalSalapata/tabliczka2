import { createContext, ReactNode, useReducer } from 'react'
import { localStorageKeys } from 'utils/constants'
import { EnContextType, EnReducerAction, EnStateType, enTopics, isEnTopic } from 'types/enTypes'

const initEnState: EnStateType = {
    userName: '',
    testLength: 10,
    topic: enTopics[0],
    answerList: [],
    startTime: 0,
}

const enReducer = (state: EnStateType, action: EnReducerAction): EnStateType => {
    switch (action.type) {
        case 'setUserName':
            return { ...state, userName: action.value }
        case 'setTopic':
            return { ...state, topic: action.value }
        case 'setTestLength':
            return { ...state, testLength: action.value }
    }
}

const EnContext = createContext<EnContextType>({
    enState: initEnState,
    enDispatch: () => null,
})

export const EnContextProvider = ({ children }: { children: ReactNode }) => {
    const [enState, enDispatch] = useReducer(enReducer, initEnState, (): EnStateType => {
        const locStrgTopic = localStorage.getItem(localStorageKeys.english.TOPIC)

        return {
            ...initEnState,
            userName: localStorage.getItem(localStorageKeys.app.USER_NAME) ?? '',
            testLength: Number(localStorage.getItem(localStorageKeys.english.TEST_LENGTH) ?? 10),
            topic:
                locStrgTopic && isEnTopic(JSON.parse(locStrgTopic))
                    ? JSON.parse(locStrgTopic)
                    : enTopics[0],
        }
    })

    return <EnContext.Provider value={{ enState, enDispatch }}>{children}</EnContext.Provider>
}

export default EnContext
