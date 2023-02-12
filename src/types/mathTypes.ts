export const BasicOperationValue = {
    addition: 'addition',
    subtraction: 'subtraction',
    multiplication: 'multiplication',
    division: 'division',
} as const

export type BasicOperationValueType = typeof BasicOperationValue[keyof typeof BasicOperationValue]

export type BasicOperation = {
    itemValue: BasicOperationValueType
    readonly path: string
    readonly sign: string
}

export const basicOperations: readonly BasicOperation[] = [
    {
        itemValue: BasicOperationValue.addition,
        path: 'dodawanie',
        sign: '+',
    },
    {
        itemValue: BasicOperationValue.subtraction,
        path: 'odejmowanie',
        sign: '-',
    },
    {
        itemValue: BasicOperationValue.multiplication,
        path: 'mnozenie',
        sign: 'x',
    },
    {
        itemValue: BasicOperationValue.division,
        path: 'dzielenie',
        sign: ':',
    },
] as const

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isBasicOperation = (arg: any): arg is BasicOperation => {
    const value = arg.itemValue
    const path = arg.path
    const sign = arg.sign

    const propsCheck = (operation: BasicOperation): boolean => {
        return operation.itemValue === value && operation.path === path && operation.sign === sign
    }

    return basicOperations.map((operation) => propsCheck(operation)).some((x) => x)
}

export type MathRangeType = [number, number]

export type MathAnswer = {
    id: number
    factors: [number, number]
    correctAnswer: number
    answer: number
    isCorrect: boolean
}

export type MathStateType = {
    testLength: number
    mathOperation: BasicOperation
    mathRange: MathRangeType
    answerList: MathAnswer[]
    testStartTime: number
}

export type MathContextType = {
    mathState: MathStateType
    mathDispatch: React.Dispatch<MathReducerAction>
}

export type MathReducerAction =
    | { type: 'setTestLength'; value: number }
    | { type: 'setMathOperation'; value: BasicOperation }
    | { type: 'setMathRange'; value: MathRangeType }
    | { type: 'addAnswer'; value: MathAnswer }
    | { type: 'clearAnswerList' }
    | { type: 'setStartTime' }

export type MathTest = {
    basicOperation: BasicOperation
    range: [number, number]
    answerList: MathAnswer[]
}
