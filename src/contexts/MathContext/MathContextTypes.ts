export type MathRangeType = [number, number]

export type MathStateType = {
    userName: string
    numberOfQuestions: number
    mathOperation: string
    mathRange: MathRangeType
}

export type MathContextType = {
    mathState: MathStateType
    mathDispatch: React.Dispatch<MathReducerAction>
}

export type MathReducerAction =
    | { type: 'setUserName'; value: string }
    | { type: 'setNumberOfQuestion'; value: number }
    | { type: 'setMathOperation'; value: string }
    | { type: 'setMathRange'; value: MathRangeType }
