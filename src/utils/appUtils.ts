export const sliderValueToTestLength = (value: number): number => {
    if (value <= 10) {
        return value
    } else if (value <= 15) {
        return 2 * (value - 10) + 10
    } else {
        return 5 * (value - 15) + 20
    }
}

export const getEndMessage = (
    correctNo: number,
    testLength: number,
    master: string,
    notBad: string,
    couldBeBetter: string,
    poor: string
): string => {
    const ratio = correctNo / testLength
    let endMessage: string

    switch (true) {
        case ratio > 0.9:
            endMessage = master
            break
        case ratio > 0.75:
            endMessage = notBad
            break
        case ratio > 0.6:
            endMessage = couldBeBetter
            break
        default:
            endMessage = poor
            break
    }

    return endMessage
}
