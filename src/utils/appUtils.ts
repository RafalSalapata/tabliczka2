export const sliderValueToTestLength = (value: number): number => {
    if (value <= 10) {
        return value
    } else if (value <= 15) {
        return 2 * (value - 10) + 10
    } else {
        return 5 * (value - 15) + 20
    }
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

export const tableCellStyles = (isCorrect: boolean) => ({
    fontSize: { xs: '13px', sm: '17px' },
    color: isCorrect ? '' : 'white',
})
