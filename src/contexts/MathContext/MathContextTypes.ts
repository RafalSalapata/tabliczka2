import { BasicOperation } from 'views/Home/Math/mathOperationsUtils'

export type MathRangeType = [number, number]
export type MathAnswer = {
    id: number
    factors: [number, number]
    correctAnswer: number
    answer: number
    isCorrect: boolean
}

export type MathStateType = {
    userName: string
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
    | { type: 'setUserName'; value: string }
    | { type: 'setTestLength'; value: number }
    | { type: 'setMathOperation'; value: BasicOperation }
    | { type: 'setMathRange'; value: MathRangeType }
    | { type: 'addAnswer'; value: MathAnswer }
    | { type: 'clearAnswerList' }
    | { type: 'setStartTime' }
