import { Phrase } from 'types/enTypes'
import { testTrimer } from 'utils/englishUtils'

const positions: Phrase[] = [
    {
        en: ['under', 'below'],
        pl: 'pod',
        cz: 'pod',
    },
    {
        en: ['in'],
        pl: 'w',
        cz: 'v',
    },
    {
        en: ['on'],
        pl: 'na',
        cz: 'na',
    },
    {
        en: ['next to'],
        pl: 'obok',
        cz: 'vedle',
    },
    {
        en: ['behind', 'after'],
        pl: 'za',
        cz: 'za',
    },
    {
        en: ['over', 'above'],
        pl: 'nad',
        cz: 'nad',
    },
    {
        en: ['in front of me'],
        pl: 'przede mną',
        cz: 'přede mnou',
    },
    {
        en: ['between'],
        pl: 'pomiędzy',
        cz: 'mezi',
    },
    {
        en: ['opposite'],
        pl: 'naprzeciwko',
        cz: 'naproti',
    },
]

export const test = testTrimer(positions)
