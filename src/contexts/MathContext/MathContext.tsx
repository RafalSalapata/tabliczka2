import { createContext, ReactNode, useReducer } from 'react'
import { MathContextType, MathReducerAction, MathStateType } from './MathContextTypes'

const initMathState: MathStateType = {
    userName: '',
    testLength: 10,
    mathOperation: { itemValue: 'addition', itemText: 'Dodawanie', path: 'dodawanie' },
    mathRange: [9, 59],
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
            testLength: Number(localStorage.getItem('testLength') ?? 10),
            mathOperation: JSON.parse(
                localStorage.getItem('mathOperation') ??
                    '{"itemValue":"addition","itemText":"Dodawanie","path":"dodawanie"}'
            ),
            mathRange: JSON.parse(localStorage.getItem('mathRange') ?? '[9, 59]'),
        }
    })

    return (
        <MathContext.Provider value={{ mathState, mathDispatch }}>{children}</MathContext.Provider>
    )
}

export default MathContext
