import { Timestamp } from 'firebase/firestore'
import { EnTest } from 'types/enTypes'
import { MathTest } from 'types/mathTypes'

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
