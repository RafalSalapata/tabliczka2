import { Phrase } from 'types/enTypes'
import { testTrimer } from 'utils/englishUtils'

const family: Phrase[] = [
    {
        en: ['mother'],
        pl: 'matka',
        cz: 'matka',
    },
    {
        en: ['father'],
        pl: 'ojciec',
        cz: 'otec',
    },
    {
        en: ['dad'],
        pl: 'tata',
        cz: 'táto',
    },
    {
        en: ['mum'],
        pl: 'mama',
        cz: 'maminka',
    },
    {
        en: ['parent'],
        pl: 'rodzic',
        cz: 'rodič',
    },
    {
        en: ['parents'],
        pl: 'rodzice',
        cz: 'rodiče',
    },
    {
        en: ['grandfather'],
        pl: 'dziadek',
        cz: 'dědeček',
    },
    {
        en: ['grandad'],
        pl: 'dziadzio',
        cz: 'děda',
    },
    {
        en: ['grandmother'],
        pl: 'babcia',
        cz: 'babička',
    },
    {
        en: ['granny'],
        pl: 'babunia',
        cz: 'babi',
    },
    {
        en: ['son'],
        pl: 'syn',
        cz: 'syn',
    },
    {
        en: ['daughter'],
        pl: 'córka',
        cz: 'dcera',
    },
    {
        en: ['family'],
        pl: 'rodzina',
        cz: 'rodina',
    },
    {
        en: ['brother'],
        pl: 'brat',
        cz: 'bratr',
    },
    {
        en: ['sister'],
        pl: 'siostra',
        cz: 'sestra',
    },
    {
        en: ['aunt'],
        pl: 'ciotka',
        cz: 'teta',
    },
    {
        en: ['uncle'],
        pl: 'wujek',
        cz: 'strýc',
    },
    {
        en: ['cousin'],
        pl: 'kuzyn',
        cz: 'bratranec',
    },
    {
        en: ['cousin'],
        pl: 'kuzynka',
        cz: 'sestřenice',
    },
    {
        en: ["Basia is Ala's sister"],
        pl: 'Basia jest siostrą Ali',
        cz: 'sestřenice',
    },
    {
        en: ["Ala is Rafał's daughter"],
        pl: 'Ala jest córką Rafała',
        cz: 'Basia je Aliho sestra',
    },
    {
        en: ["Rafał is Basia' dad"],
        pl: 'Rafał jest tatą Basi',
        cz: 'Rafał je Basiin otec',
    },
]

export const test = testTrimer(family)
