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
        en: ['heart'],
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
        en: ['backbone', 'spine'],
        pl: 'kręgosłup',
        cz: 'páteř',
    },
    {
        en: ['blond hair'],
        pl: 'włosy blond',
        cz: 'vlasy',
    },
    {
        en: ['curly hair'],
        pl: 'włosy kręcone',
        cz: 'vlasy',
    },
    {
        en: ['blond hair'],
        pl: 'włosy blond',
        cz: 'vlasy',
    },
    {
        en: ['dark hair'],
        pl: 'włosy ciemne',
        cz: 'vlasy',
    },
    {
        en: ['spiky hair'],
        pl: 'włosy nastroszone',
        cz: 'vlasy',
    },
    {
        en: ['straight hair'],
        pl: 'włosy proste',
        cz: 'vlasy',
    },
    {
        en: ['wavy hair'],
        pl: 'włosy faliste',
        cz: 'vlasy',
    },
    {
        en: ['blood'],
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
