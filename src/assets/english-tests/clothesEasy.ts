import { Phrase } from 'types/enTypes'
import { testTrimer } from 'utils/englishUtils'

const clothesEasy: Phrase[] = [
    {
        en: ['trousers', 'pants'],
        pl: 'spodnie',
        cz: 'kalhoty',
    },
    {
        en: ['boots', 'shoes'],
        pl: 'buty',
        cz: 'obuv',
    },
    {
        en: ['jacket'],
        pl: 'kurtka',
        cz: 'bunda',
    },
    {
        en: ['shirt'],
        pl: 'koszula',
        cz: 'košile',
    },
    {
        en: ['shorts'],
        pl: 'krótkie spodenki',
        cz: 'klobouček',
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
        en: ['jeans'],
        pl: 'dżinsy',
        cz: 'džíny',
    },
    {
        en: ['jumper', 'sweater'],
        pl: 'sweter',
        cz: 'svetr',
    },
    {
        en: [
            "I'm wearing trousers",
            'I am wearing trousers',
            "I'm wearing pants",
            'I am wearing pants',
        ],
        pl: 'Noszę spodnie',
        cz: '',
    },
    {
        en: ['You are wearing a skirt', "You're wearing a skirt"],
        pl: 'Ty nosisz spódnicę',
        cz: '',
    },
    {
        en: [
            'He is wearing a sweater',
            "He's wearing a sweater",
            'He is wearing a jumper',
            "He's wearing a jumper",
        ],
        pl: 'On nosi sweter',
        cz: '',
    },
    {
        en: ['She is wearing jeans', "She's wearing jeans"],
        pl: 'Ona nosi dżinsy',
        cz: '',
    },
]

export const test = testTrimer(clothesEasy)
