import { Phrase } from 'types/enTypes'
import { testTrimer } from 'utils/englishUtils'

const house: Phrase[] = [
    {
        en: ['bed'],
        pl: 'łóżko',
        cz: 'postel',
    },
    {
        en: ['chair'],
        pl: 'krzesło',
        cz: 'židle',
    },
    {
        en: ['desk'],
        pl: 'biurko',
        cz: 'psací stůl',
    },
    {
        en: ['sofa'],
        pl: 'kanapa',
        cz: 'gauč',
    },
    {
        en: ['table'],
        pl: 'stół',
        cz: 'stůl',
    },
    {
        en: ['window'],
        pl: 'okno',
        cz: 'okno',
    },
    {
        en: ['bathroom'],
        pl: 'łazienka',
        cz: 'koupelna',
    },
    {
        en: ['bedroom'],
        pl: 'sypialnia',
        cz: 'ložnice',
    },
    {
        en: ['door'],
        pl: 'drzwi',
        cz: 'dveře',
    },
    {
        en: ['floor'],
        pl: 'podłoga',
        cz: 'podlaha',
    },
    {
        en: ['garage'],
        pl: 'garaż',
        cz: 'garáž',
    },
    {
        en: ['garden'],
        pl: 'ogród',
        cz: 'zahrada',
    },
    {
        en: ['kitchen'],
        pl: 'kuchnia',
        cz: 'kuchyň',
    },
    {
        en: ['living room'],
        pl: 'pokój dzienny / salon',
        cz: 'obývací pokoj',
    },
    {
        en: ['wall'],
        pl: 'ściana',
        cz: 'stěna',
    },
    {
        en: ['armchair'],
        pl: 'fotel',
        cz: 'křeslo',
    },
    {
        en: ['bath'],
        pl: 'wanna',
        cz: 'vana',
    },
    {
        en: ['fridge'],
        pl: 'lodówka',
        cz: 'lednička',
    },
    {
        en: ['wardrobe'],
        pl: 'szafa',
        cz: 'skříň',
    },
    {
        en: ['board'],
        pl: 'tablica',
        cz: 'tabule',
    },
    {
        en: ['There are two phones on the table'],
        pl: 'Na stole są dwa telefony',
        cz: 'Na stole jsou dva telefony',
    },
    {
        en: ['Ala is in front of the wall'],
        pl: 'Ala jest przed ścianą',
        cz: 'Ala je před stěnou',
    },
    {
        en: ["There aren't any eggs in the fridge"],
        pl: 'Nie ma żadnych jajek w lodówce',
        cz: 'V ledničce nejsou žádná vejce',
    },
    {
        en: ['The chair is next to Basia'],
        pl: 'Krzesło jest obok Basi',
        cz: 'Židle je vedle Basi',
    },
    {
        en: ['carpet'],
        pl: 'dywan',
        cz: 'koberec',
    },
    {
        en: ['cushion', 'pillow'],
        pl: 'poduszka',
        cz: 'polštář',
    },
    {
        en: ['plant'],
        pl: 'roślina',
        cz: 'rostlina',
    },
    {
        en: ['poster'],
        pl: 'plakat',
        cz: 'plakát',
    },
    {
        en: ['TV', 'television'],
        pl: 'telewizja',
        cz: 'televizor',
    },
    {
        en: ['lamp'],
        pl: 'lampa',
        cz: 'lampa',
    },
    {
        en: ['household'],
        pl: 'gospodarstwo domowe',
        cz: 'domácnost',
    },
]

export const test = testTrimer(house)
