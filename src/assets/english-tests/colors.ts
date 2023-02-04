import { Phrase } from 'types/enTypes'
import { testTrimer } from 'utils/englishUtils'

const colors: Phrase[] = [
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
        en: ['light blue'],
        pl: 'jasnoniebieski',
        cz: 'světle modrá',
    },
    {
        en: ['light red'],
        pl: 'jasnoczerwony',
        cz: 'světle červená',
    },
    {
        en: ['light green'],
        pl: 'jasnozielony',
        cz: 'světle zelená',
    },
    {
        en: ['light pink'],
        pl: 'jasnoróżowy',
        cz: 'světle růžová',
    },
    {
        en: ['light orange'],
        pl: 'jasnopomarańczowy',
        cz: 'světle oranžová',
    },
    {
        en: ['light violet'],
        pl: 'jasnofioletowy',
        cz: 'světle fialová',
    },
    {
        en: ['light yellow'],
        pl: 'jasnożółty',
        cz: 'světle žlutá',
    },
    {
        en: ['light grey'],
        pl: 'jasnoszary',
        cz: 'světle šedá',
    },
    {
        en: ['light brown'],
        pl: 'jasnobrązowy',
        cz: 'světle hnědá',
    },
    {
        en: ['dark blue'],
        pl: 'ciemnoniebieski',
        cz: 'tmavě modrá',
    },
    {
        en: ['dark red'],
        pl: 'ciemnoczerwony',
        cz: 'tmavě červená',
    },
    {
        en: ['dark green'],
        pl: 'ciemnozielony',
        cz: 'tmavě zelená',
    },
    {
        en: ['dark pink'],
        pl: 'ciemnoróżowy',
        cz: 'tmavě růžová',
    },
    {
        en: ['dark orange'],
        pl: 'ciemnopomarańczowy',
        cz: 'tmavě oranžová',
    },
    {
        en: ['dark violet'],
        pl: 'ciemnofioletowy',
        cz: 'tmavě fialová',
    },
    {
        en: ['dark yellow'],
        pl: 'ciemnożółty',
        cz: 'tmavě žlutá',
    },
    {
        en: ['dark grey'],
        pl: 'ciemnoszary',
        cz: 'tmavě šedá',
    },
    {
        en: ['dark brown'],
        pl: 'ciemnobrązowy',
        cz: 'tmavě hnědá',
    },
]

export const test = testTrimer(colors)
