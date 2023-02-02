import { EnTopicValueType, Phrase } from 'types/enTypes'

export const lazyTestImport = async (testName: EnTopicValueType): Promise<Phrase[]> => {
    const { test } = await import(`assets/english-tests/${testName}`)
    return test
}

export const testTrimer = (test: Phrase[]): Phrase[] => {
    return test.map((item) => ({
        en: item.en.map((word) => word.trim()),
        pl: item.pl.trim(),
        cz: item.cz.trim(),
    }))
}
