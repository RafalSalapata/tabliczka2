import { createContext, ReactNode, useReducer } from 'react'
import { MathContextType, MathReducerAction, MathStateType } from './MathContextTypes'
import { localStorageKeys } from 'utils/constants'
import { isBasicOperation } from 'types/mathTypes'

const initMathState: MathStateType = {
    userName: '',
    testLength: 10,
    mathOperation: { itemValue: 'addition', itemText: 'Dodawanie', path: 'dodawanie', sign: '+' },
    mathRange: [9, 59],
    answerList: [],
    testStartTime: 0,
}

const mathReducer = (state: MathStateType, action: MathReducerAction): MathStateType => {
    switch (action.type) {
        case 'setUserName':
            return { ...state, userName: action.value }
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
        const operation = localStorage.getItem(localStorageKeys.MATH_OPERATION_KEY)

        return {
            ...initMathState,
            userName: localStorage.getItem(localStorageKeys.USER_NAME_KEY) ?? '',
            testLength: Number(localStorage.getItem(localStorageKeys.TEST_LENGTH_KEY) ?? 10),
            mathOperation:
                operation && isBasicOperation(JSON.parse(operation))
                    ? JSON.parse(operation)
                    : {
                          itemValue: 'addition',
                          itemText: 'Dodawanie',
                          path: 'dodawanie',
                          sign: '+',
                      },
            mathRange: JSON.parse(
                localStorage.getItem(localStorageKeys.MATH_RANGE_KEY) ?? '[9, 59]'
            ),
        }
    })

    return (
        <MathContext.Provider value={{ mathState, mathDispatch }}>{children}</MathContext.Provider>
    )
}

export default MathContext
