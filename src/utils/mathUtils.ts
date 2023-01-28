import { BasicOperation } from 'types/mathTypes'

export const sliderValueToTestLength = (value: number): number => {
    if (value <= 10) {
        return value
    } else if (value <= 15) {
        return 2 * (value - 10) + 10
    } else {
        return 5 * (value - 15) + 20
    }
}

const getDivisors = (n: number): number[] => {
    return [...Array(n + 1).keys()].slice(1).filter((i) => n % i === 0)
}

const getRandomFromTo = (from: number, to: number): number => {
    return Math.floor((to - from + 1) * Math.random() + from)
}

export const getFactors = (min: number, max: number, operation: string): [number, number] => {
    let b = getRandomFromTo(min, max)
    let a = getRandomFromTo(min, b)

    if (operation === 'subtraction' && a === b) {
        b = getRandomFromTo(min + 2, max) // min and max are set in frontend to fulfil: max - min >=5
        a = getRandomFromTo(min, b - 2)
    }

    if (operation === 'division') {
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

export const getCorrectAnswer = (factors: [number, number], operation: BasicOperation): number => {
    let correctAnswer = 0

    const exhaustiveCheck = (x: never) => {
        throw new Error('check if all Basic Operations values are listed in the switch below')
    }

    switch (operation.itemValue) {
        case 'addition':
            correctAnswer = factors[1] + factors[0]
            break
        case 'subtraction':
            correctAnswer = factors[1] - factors[0]
            break
        case 'multiplication':
            correctAnswer = factors[1] * factors[0]
            break
        case 'division':
            correctAnswer = factors[1] / factors[0]
            break
        default:
            exhaustiveCheck(operation)
    }

    return correctAnswer
}

export const getEndMessage = (correctNo: number, testLength: number): string => {
    const ratio = correctNo / testLength
    let endMessage: string

    switch (true) {
        case ratio > 0.9:
            endMessage = 'Mistrzunio! :D'
            break
        case ratio > 0.75:
            endMessage = 'Nieźle :)'
            break
        case ratio > 0.6:
            endMessage = 'Nie ma tragedii'
            break
        default:
            endMessage = 'Cienizna :('
            break
    }

    return endMessage
}
