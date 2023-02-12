import { Theme } from '@mui/material'
import { SystemStyleObject } from '@mui/system'
import { Timestamp } from 'firebase/firestore'
import { EnTest } from 'types/enTypes'
import { MathTest } from 'types/mathTypes'

export const enum JustifyContentEnum {
    center = 'center',
    left = 'left',
}

type SxThemedClass = (theme: Theme) => SystemStyleObject<Theme>
export type SxClassesType = Record<string, SystemStyleObject<Theme> | SxThemedClass>

export type SelectItem = {
    readonly itemValue: string
    readonly itemText: string
}

export const enum ThemeMode {
    light = 'light',
    dark = 'dark',
}

export type ThemeContextType = {
    toggleThemeMode: () => void
    mode: ThemeMode
}

export const enum TestCategoryType {
    math = 'math',
    english = 'english',
}

export type RecordType = {
    userName: string
    testCategory: TestCategoryType
    createdAt: Timestamp
    testDuration: number
    testLength: number
    correctAnswerNo: number
    mathTest: MathTest | null
    enTest: EnTest | null
}

export type RecordTypeWithId = RecordType & {
    id: string
}

export const LanguageValue = {
    pl: 'pl',
    cz: 'cz',
} as const

export type LanguageType = typeof LanguageValue[keyof typeof LanguageValue]

export type Sentences = {
    home: {
        lesson: string
        math: string
        english: string
        spelling: string
        lastResults: string
    }
    testName: {
        addition: string
        subtraction: string
        multiplication: string
        division: string
        bodyParts: string
        family: string
        animals: string
        birthday: string
        clothesEasy: string
        clothes: string
        colorsEasy: string
        colors: string
        house: string
        numbersEasy: string
        numbers: string
        positions: string
        time: string
    }
    setup: {
        settings: string
        yourName: string
        numberOfQuestions: string
        operation: string
        topic: string
        range: string
        incorrectNameMgs: string
    }
    test: {
        questionNo: string
        translate: string
        howMuch: string
        nextQuestion: string
        lazyLoadingError: string
    }
    summary: {
        yourResult: string
        master: string
        notBad: string
        couldBeBetter: string
        poor: string
        repeatTest: string
        answers: string
        shouldBe: string
    }
    results: {
        time: string
        noLastResults: string
    }
}

export type LocalizationType = {
    pl: Sentences
    cz: Sentences
}

export type AppStateType = {
    userName: string
    language: LanguageType
}

export type AppContextType = {
    appState: AppStateType
    appDispatch: React.Dispatch<AppReducerAction>
    localization: Sentences
}

export type AppReducerAction =
    | { type: 'setUserName'; value: string }
    | { type: 'setLanguage'; value: LanguageType }
