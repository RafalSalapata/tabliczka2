import { createContext, ReactNode, useReducer } from 'react'
import { MathContextType, MathReducerAction, MathStateType } from './MathContextTypes'

const initMathState: MathStateType = {
    userName: '',
    numberOfQuestions: 1,
    mathOperation: 'addition',
    mathRange: [1, 100],
}

const mathReducer = (state: MathStateType, action: MathReducerAction): MathStateType => {
    switch (action.type) {
        case 'setUserName':
            return { ...state, userName: action.value }
        case 'setNumberOfQuestion':
            return { ...state, numberOfQuestions: action.value }
        case 'setMathOperation':
            return { ...state, mathOperation: action.value }
        case 'setMathRange':
            return { ...state, mathRange: action.value }
    }
}

const MathContext = createContext<MathContextType>({
    mathState: initMathState,
    mathDispatch: () => null,
})

export const MathContextProvider = ({ children }: { children: ReactNode }) => {
    const [mathState, mathDispatch] = useReducer(mathReducer, initMathState, (): MathStateType => {
        return {
            ...initMathState,
            userName: localStorage.getItem('userName') ?? '',
            numberOfQuestions: Number(localStorage.getItem('numberOfQuestions') ?? 10),
            mathOperation: localStorage.getItem('mathOperation') ?? 'addition',
            mathRange: JSON.parse(localStorage.getItem('mathRange') ?? '[9, 59]'),
        }
    })

    return (
        <MathContext.Provider value={{ mathState, mathDispatch }}>{children}</MathContext.Provider>
    )
}

export default MathContext
