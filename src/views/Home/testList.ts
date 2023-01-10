type Lesson = 'math' | 'english'

type Test = {
    lesson: Lesson
    value: string
    dispalyText: string
    path: string
    relativePath: string
}

export const testList: Test[] = [
    {
        lesson: 'math',
        value: 'addition',
        dispalyText: 'Dodawanie',
        path: '/matematyka/dodawanie',
        relativePath: 'dodawanie',
    },
    {
        lesson: 'math',
        value: 'subtraction',
        dispalyText: 'Odejmowanie',
        path: '/matematyka/odejmowanie',
        relativePath: 'odejmowanie',
    },
    {
        lesson: 'math',
        value: 'multiplication',
        dispalyText: 'Mnożenie',
        path: '/matematyka/mnozenie',
        relativePath: 'mnozenie',
    },
    {
        lesson: 'math',
        value: 'division',
        dispalyText: 'Dzielenie',
        path: '/matematyka/dzielenie',
        relativePath: 'dzielenie',
    },
]
