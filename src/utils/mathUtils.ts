import { Sentences } from 'types/appTypes'
import { BasicOperationValue, BasicOperationValueType } from 'types/mathTypes'

const getDivisors = (n: number): number[] => {
    return [...Array(n + 1).keys()].slice(1).filter((i) => n % i === 0)
}

const getRandomFromTo = (from: number, to: number): number => {
    return Math.floor((to - from + 1) * Math.random() + from)
}

export const getFactors = (min: number, max: number, operation: string): [number, number] => {
    let b = getRandomFromTo(min, max)
    let a = getRandomFromTo(min, b)

    if (operation === BasicOperationValue.subtraction && a === b) {
        b = getRandomFromTo(min + 2, max) // min and max are set in frontend to fulfil: max - min >=5
        a = getRandomFromTo(min, b - 2)
    }

    if (operation === BasicOperationValue.division) {
        b = getRandomFromTo(min + 1, max) // min and max are set in frontend to fulfil: max - min >=5
        a = getRandomFromTo(min, b - 1)
        let divisors = getDivisors(b)

        if (divisors.length > 2) {
            //non-prime numbers
            a = divisors[getRandomFromTo(1, divisors.length - 2)]
        } else if (b === max) {
            b-- // prime numbers that equals to max, this is fine as max is 7 at least, so b-- is not a prime
            divisors = getDivisors(b)
            a = divisors[getRandomFromTo(1, divisors.length - 2)]
        } else {
            b++ // b++ is not a prime as b > min >= 2
            divisors = getDivisors(b)
            a = divisors[getRandomFromTo(1, divisors.length - 2)]
        }
    }

    return [a, b]
}

export const getCorrectAnswer = (
    factors: [number, number],
    operationValue: BasicOperationValueType
): number => {
    let correctAnswer = 0

    const exhaustiveCheck = (x: never) => {
        throw new Error('check if all Basic Operations values are listed in the switch below')
    }

    switch (operationValue) {
        case BasicOperationValue.addition:
            correctAnswer = factors[1] + factors[0]
            break
        case BasicOperationValue.subtraction:
            correctAnswer = factors[1] - factors[0]
            break
        case BasicOperationValue.multiplication:
            correctAnswer = factors[1] * factors[0]
            break
        case BasicOperationValue.division:
            correctAnswer = factors[1] / factors[0]
            break
        default:
            exhaustiveCheck(operationValue)
    }

    return correctAnswer
}

export const operationToDisplayText = (
    operation: BasicOperationValueType,
    localization: Sentences
): string => {
    let displayText = ''

    const exhaustiveCheck = (x: never) => {
        throw new Error('check if all possible values are listed in the switch below')
    }

    switch (operation) {
        case BasicOperationValue.addition:
            displayText = localization.testName.addition
            break
        case BasicOperationValue.subtraction:
            displayText = localization.testName.subtraction
            break
        case BasicOperationValue.multiplication:
            displayText = localization.testName.multiplication
            break
        case BasicOperationValue.division:
            displayText = localization.testName.division
            break
        default:
            exhaustiveCheck(operation)
    }

    return displayText
}
