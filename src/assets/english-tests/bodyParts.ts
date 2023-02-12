import { Phrase } from 'types/enTypes'
import { testTrimer } from 'utils/englishUtils'

const bodyParts: Phrase[] = [
    {
        en: ['nose'],
        pl: 'nos',
        cz: 'nos',
    },
    {
        en: ['back'],
        pl: 'plecy',
        cz: 'záda',
    },
    {
        en: ['foot'],
        pl: 'stopa',
        cz: 'chodidlo',
    },
    {
        en: ['knee'],
        pl: 'kolano',
        cz: 'koleno',
    },
    {
        en: ['hart'],
        pl: 'serce',
        cz: 'srdce',
    },
    {
        en: ['feet'],
        pl: 'stopy',
        cz: 'chodidla',
    },
    {
        en: ['head'],
        pl: 'głowa',
        cz: 'hlava',
    },
    {
        en: ['hand', 'arm'],
        pl: 'ręka',
        cz: 'ruka',
    },
    {
        en: ['bone'],
        pl: 'kość',
        cz: 'kost',
    },
    {
        en: ['backbone'],
        pl: 'kręgosłup',
        cz: 'páteř',
    },
    {
        en: ['hair'],
        pl: 'włosy',
        cz: 'vlasy',
    },
    {
        en: ['blod'],
        pl: 'krew',
        cz: 'krev',
    },
    {
        en: ['eye'],
        pl: 'oko',
        cz: 'oko',
    },
    {
        en: ['ear'],
        pl: 'ucho',
        cz: 'ucho',
    },
    {
        en: ['mouth', 'lips'],
        pl: 'usta',
        cz: 'pusa',
    },
    {
        en: ['face'],
        pl: 'twarz',
        cz: 'obličej',
    },
    {
        en: ['leg'],
        pl: 'noga',
        cz: 'noha',
    },
    {
        en: ['belly', 'stomach'],
        pl: 'brzuch',
        cz: 'břicho',
    },
    {
        en: ['hand'],
        pl: 'dłoń',
        cz: 'ruka',
    },
    {
        en: ['arm'],
        pl: 'ramię',
        cz: 'rameno',
    },
    {
        en: ['tongue'],
        pl: 'język',
        cz: 'jazyk',
    },
    {
        en: ['finger'],
        pl: 'palec',
        cz: 'prst',
    },
    {
        en: ['thumb'],
        pl: 'kciuk',
        cz: 'palec',
    },
    {
        en: ['toe'],
        pl: 'palec u nogi',
        cz: 'prst u nohy',
    },
]

export const test = testTrimer(bodyParts)
