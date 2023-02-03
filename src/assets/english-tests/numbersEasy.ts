import { Phrase } from 'types/enTypes'
import { testTrimer } from 'utils/englishUtils'

const numbersEasy: Phrase[] = [
    {
        en: ['one'],
        pl: 'jeden',
        cz: 'jeden',
    },
    {
        en: ['two'],
        pl: 'dwa',
        cz: 'dva',
    },
    {
        en: ['three'],
        pl: 'trzy',
        cz: 'tři',
    },
    {
        en: ['four'],
        pl: 'cztery',
        cz: 'čtyři',
    },
    {
        en: ['five'],
        pl: 'pięć',
        cz: 'pět',
    },
    {
        en: ['six'],
        pl: 'sześć',
        cz: 'šest',
    },
    {
        en: ['seven'],
        pl: 'siedem',
        cz: 'sedm',
    },
    {
        en: ['eight'],
        pl: 'osiem',
        cz: 'osm',
    },
    {
        en: ['nine'],
        pl: 'dziewięć',
        cz: 'devět',
    },
    {
        en: ['ten'],
        pl: 'dziesięć',
        cz: 'deset',
    },
]

export const test = testTrimer(numbersEasy)
