import { Phrase } from 'types/enTypes'
import { testTrimer } from 'utils/englishUtils'

const clothes: Phrase[] = [
    {
        en: ['boots', 'shoes'],
        pl: 'buty',
        cz: 'obuv',
    },
    {
        en: ['cap'],
        pl: 'czapeczka',
        cz: 'klobouček',
    },
    {
        en: ['coat'],
        pl: 'płaszcz',
        cz: 'kabát',
    },
    {
        en: ['dress'],
        pl: 'sukienka',
        cz: 'šaty',
    },
    {
        en: ['hoodie'],
        pl: 'bluza z kapturem',
        cz: 'mikina',
    },
    {
        en: ['jacket'],
        pl: 'kurtka',
        cz: 'bunda',
    },
    {
        en: ['jeans'],
        pl: 'dżinsy',
        cz: 'džíny',
    },
    {
        en: ['jumper'],
        pl: 'sweter',
        cz: 'svetr',
    },
    {
        en: ['shirt'],
        pl: 'koszula',
        cz: 'košile',
    },
    {
        en: ['skirt'],
        pl: 'spódnica',
        cz: 'sukně',
    },
    {
        en: ['T-shirt'],
        pl: 'bluzka',
        cz: 'tričko',
    },
    {
        en: ['top'],
        pl: 'góra',
        cz: 'horní',
    },
    {
        en: ['tracksuit'],
        pl: 'dres',
        cz: 'tepláková souprava',
    },
    {
        en: ['trousers', 'pants'],
        pl: 'spodnie',
        cz: 'kalhoty',
    },
]

export const test = testTrimer(clothes)
