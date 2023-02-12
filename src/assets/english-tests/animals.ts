import { Phrase } from 'types/enTypes'
import { testTrimer } from 'utils/englishUtils'

const animals: Phrase[] = [
    { en: ['bird'], pl: 'ptak', cz: 'pták' },
    { en: ['dog'], pl: 'pies', cz: 'pes' },
    { en: ['cat'], pl: 'kot', cz: 'kočka' },
    { en: ['elephant'], pl: 'słoń', cz: 'slon' },
    { en: ['tiger'], pl: 'tygrys', cz: 'tygr' },
    { en: ['lion'], pl: 'lew', cz: 'lev' },
    { en: ['fish'], pl: 'ryba', cz: 'ryba' },
    { en: ['bug', 'worm'], pl: 'robak', cz: 'červ' },
    { en: ['giraffe'], pl: 'żyrafa', cz: 'žirafa' },
    { en: ['hippo', 'hippopotamus'], pl: 'hipopotam', cz: 'hroch' },
    { en: ['horse'], pl: 'koń', cz: 'kůň' },
    { en: ['hamster'], pl: 'chomik', cz: 'křeček' },
    { en: ['chicken'], pl: 'kurczak', cz: 'kuře' },
    { en: ['duck'], pl: 'kaczka', cz: 'kachna' },
    { en: ['mouse'], pl: 'mysz', cz: 'myš' },
    { en: ['mice'], pl: 'myszy', cz: 'myši' },
    { en: ['snake'], pl: 'wąż', cz: 'had' },
    { en: ['monkey'], pl: 'małpa', cz: 'opice' },
    { en: ['butterfly'], pl: 'motyl', cz: 'motýl' },
    { en: ['bee'], pl: 'pszczoła', cz: 'včela' },
    { en: ['fly', 'housefly'], pl: 'mucha', cz: 'moucha' },
    { en: ['turtle', 'tortoise'], pl: 'zółw', cz: 'želva' },
    { en: ['parrot'], pl: 'papuga', cz: 'papoušek' },
    { en: ['paw'], pl: 'łapa', cz: 'tlapka' },
    { en: ['tail'], pl: 'ogon', cz: 'ocas' },
    { en: ['wing'], pl: 'skrzydło', cz: 'křídlo' },
]

export const test = testTrimer(animals)
