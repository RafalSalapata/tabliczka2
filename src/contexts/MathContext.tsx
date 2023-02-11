import { createContext, ReactNode, useReducer } from 'react'
import { basicOperations, MathContextType, MathReducerAction, MathStateType } from 'types/mathTypes'
import { localStorageKeys } from 'utils/constants'
import { isBasicOperation } from 'types/mathTypes'

const initMathState: MathStateType = {
    testLength: 10,
    mathOperation: basicOperations[0],
    mathRange: [9, 59],
    answerList: [],
    testStartTime: 0,
}

const mathReducer = (state: MathStateType, action: MathReducerAction): MathStateType => {
    switch (action.type) {
        case 'setTestLength':
            return { ...state, testLength: action.value }
        case 'setMathOperation':
            return { ...state, mathOperation: action.value }
        case 'setMathRange':
            return { ...state, mathRange: action.value }
        case 'addAnswer':
            return { ...state, answerList: [...state.answerList, action.value] }
        case 'clearAnswerList':
            return { ...state, answerList: [] }
        case 'setStartTime':
            return { ...state, testStartTime: Date.now() }
    }
}

const MathContext = createContext<MathContextType>({
    mathState: initMathState,
    mathDispatch: () => null,
})

export const MathContextProvider = ({ children }: { children: ReactNode }) => {
    const [mathState, mathDispatch] = useReducer(mathReducer, initMathState, (): MathStateType => {
        const operation = localStorage.getItem(localStorageKeys.math.OPERATION)

        return {
            ...initMathState,
            testLength: Number(localStorage.getItem(localStorageKeys.math.TEST_LENGTH) ?? 10),
            mathOperation:
                operation && isBasicOperation(JSON.parse(operation))
                    ? JSON.parse(operation)
                    : basicOperations[0],
            mathRange: JSON.parse(localStorage.getItem(localStorageKeys.math.RANGE) ?? '[9, 59]'),
        }
    })

    return (
        <MathContext.Provider value={{ mathState, mathDispatch }}>{children}</MathContext.Provider>
    )
}

export default MathContext
