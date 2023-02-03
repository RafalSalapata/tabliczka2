import { Phrase } from 'types/enTypes'
import { testTrimer } from 'utils/englishUtils'

const house: Phrase[] = [
    {
        en: ['bed'],
        pl: 'łóżko',
        cz: '',
    },
    {
        en: ['chair'],
        pl: 'krzesło',
        cz: '',
    },
    {
        en: ['desk'],
        pl: 'biurko',
        cz: '',
    },
    {
        en: ['sofa'],
        pl: 'kanapa',
        cz: '',
    },
    {
        en: ['table'],
        pl: 'stół',
        cz: '',
    },
    {
        en: ['window'],
        pl: 'okno',
        cz: '',
    },
    {
        en: ['bathroom'],
        pl: 'łazienka',
        cz: '',
    },
    {
        en: ['bedroom'],
        pl: 'sypialnia',
        cz: '',
    },
    {
        en: ['door'],
        pl: 'drzwi',
        cz: '',
    },
    {
        en: ['floor'],
        pl: 'podłoga',
        cz: '',
    },
    {
        en: ['garage'],
        pl: 'garaż',
        cz: '',
    },
    {
        en: ['garden'],
        pl: 'ogród',
        cz: '',
    },
    {
        en: ['kitchen'],
        pl: 'kuchnia',
        cz: '',
    },
    {
        en: ['living room'],
        pl: 'pokój dzienny / salon',
        cz: '',
    },
    {
        en: ['wall'],
        pl: 'ściana',
        cz: '',
    },
    {
        en: ['armchair'],
        pl: 'fotel',
        cz: '',
    },
    {
        en: ['bath'],
        pl: 'wanna',
        cz: '',
    },
    {
        en: ['fridge'],
        pl: 'lodówka',
        cz: '',
    },
    {
        en: ['wardrobe'],
        pl: 'szafa',
        cz: '',
    },
    {
        en: ['board'],
        pl: 'tablica',
        cz: '',
    },
    {
        en: ['There are two phones on the table'],
        pl: 'Na stole są dwa telefony',
        cz: '',
    },
    {
        en: ['Ala is in front of the wall'],
        pl: 'Ala jest przed ścianą',
        cz: '',
    },
    {
        en: ["There aren't any eggs in the fridge"],
        pl: 'Nie ma jajek w lodówce',
        cz: '',
    },
    {
        en: ['Chair is next to Basia'],
        pl: 'Krzesło jest obok Basi',
        cz: '',
    },
    {
        en: ['behind'],
        pl: 'za',
        cz: '',
    },
    {
        en: ['carpet'],
        pl: 'dywan',
        cz: '',
    },
    {
        en: ['cushion', 'pillow'],
        pl: 'poduszka',
        cz: '',
    },
    {
        en: ['plant'],
        pl: 'roślina',
        cz: '',
    },
    {
        en: ['poster'],
        pl: 'plakat',
        cz: '',
    },
    {
        en: ['TV', 'television'],
        pl: 'telewizja',
        cz: '',
    },
    {
        en: ['lamp'],
        pl: 'lampa',
        cz: '',
    },
    {
        en: ['household'],
        pl: 'gospodarstwo domowe',
        cz: '',
    },
]

export const test = testTrimer(house)
