import { Phrase } from 'types/enTypes'
import { testTrimer } from 'utils/englishUtils'

const colorsEasy: Phrase[] = [
    {
        en: ['blue'],
        pl: 'niebieski',
        cz: 'modrá',
    },
    {
        en: ['red'],
        pl: 'czerwony',
        cz: 'červená',
    },
    {
        en: ['green'],
        pl: 'zielony',
        cz: 'zelená',
    },
    {
        en: ['pink'],
        pl: 'różowy',
        cz: 'růžová',
    },
    {
        en: ['orange'],
        pl: 'pomarańczowy',
        cz: 'oranžová',
    },
    {
        en: ['violet'],
        pl: 'fioletowy',
        cz: 'fialová',
    },
    {
        en: ['yellow'],
        pl: 'żółty',
        cz: 'žlutá',
    },
    {
        en: ['black'],
        pl: 'czarny',
        cz: 'černá',
    },
    {
        en: ['white'],
        pl: 'biały',
        cz: 'bílá',
    },
    {
        en: ['grey'],
        pl: 'szary',
        cz: 'šedá',
    },
    {
        en: ['brown'],
        pl: 'brązowy',
        cz: 'hnědá',
    },
]

export const test = testTrimer(colorsEasy)
