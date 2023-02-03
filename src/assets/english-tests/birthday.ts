import { Phrase } from 'types/enTypes'
import { testTrimer } from 'utils/englishUtils'

const birthday: Phrase[] = [
    {
        en: ['balloon'],
        pl: 'balon',
        cz: 'balón',
    },
    {
        en: ['candle'],
        pl: 'świeczka',
        cz: 'svíčka',
    },
    {
        en: ['cake'],
        pl: 'tort',
        cz: 'dort',
    },
    {
        en: ['ribbon'],
        pl: 'wstążka',
        cz: 'stuha',
    },
    {
        en: ['plate'],
        pl: 'talerz',
        cz: 'talíř',
    },
    {
        en: ['clown'],
        pl: 'klaun',
        cz: 'klaun',
    },
    {
        en: ['hat'],
        pl: 'czapeczka',
        cz: 'čepice',
    },
    {
        en: ['present'],
        pl: 'prezent',
        cz: 'dárek',
    },
    {
        en: ['cup', 'mug'],
        pl: 'kubek',
        cz: 'hrnek',
    },
    {
        en: ['card'],
        pl: 'kartka urodzinowa',
        cz: 'kartu',
    },
    {
        en: ['yo-yo'],
        pl: 'yo-yo',
        cz: 'yo-yo',
    },
    {
        en: ['robot'],
        pl: 'robot',
        cz: 'robot',
    },
    {
        en: ['puzzle'],
        pl: 'puzzle',
        cz: 'hádanka',
    },
    {
        en: ['basketball'],
        pl: 'piłka do koszykówki',
        cz: 'basketball',
    },
    {
        en: ['birthday'],
        pl: 'urodziny',
        cz: 'narozeniny',
    },
]

export const test = testTrimer(birthday)
