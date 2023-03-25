import { Phrase } from 'types/enTypes'
import { testTrimer } from 'utils/englishUtils'

const unit4: Phrase[] = [
    {
        en: ['help me, please'],
        pl: 'pomóż mi, proszę',
        cz: '',
    },
    {
        en: ["it isn't my fault", "it's not my fault"],
        pl: 'to nie jest moja wina',
        cz: '',
    },
    {
        en: ['stop it'],
        pl: 'przestań',
        cz: '',
    },
    {
        en: ['a lot of', 'many'],
        pl: 'dużo',
        cz: '',
    },
    {
        en: ['fine', "it's all right"],
        pl: 'w porządku',
        cz: '',
    },
    {
        en: ['high'],
        pl: 'wysoko',
        cz: '',
    },
    {
        en: ['hurry up'],
        pl: 'pospiesz się',
        cz: '',
    },
    {
        en: ['tall'],
        pl: 'wysoki',
        cz: '',
    },
    {
        en: ['time'],
        pl: 'czas',
        cz: '',
    },
    {
        en: ['hero'],
        pl: 'bohater',
        cz: '',
    },
    {
        en: ['like'],
        pl: 'lubić',
        cz: '',
    },
    {
        en: ['super power'],
        pl: 'supermoc',
        cz: '',
    },
    {
        en: ['Are you ok?'],
        pl: 'Czy dobrze się czujesz?',
        cz: '',
    },
    {
        en: ["I'm fine"],
        pl: 'czuję się dobrze',
        cz: '',
    },
    {
        en: ["I'm so sorry"],
        pl: 'tak mi przykro',
        cz: '',
    },
    {
        en: ["it's ok", 'no problem'],
        pl: 'nie ma sprawy',
        cz: '',
    },
    {
        en: ["it's ok", 'no problem'],
        pl: 'nie ma problemu',
        cz: '',
    },
    {
        en: ['sorry about that'],
        pl: 'przepraszam za to',
        cz: '',
    },
    {
        en: ['sorry, my mistake'],
        pl: 'przepraszam, mój błąd',
        cz: '',
    },
    {
        en: ["that's all right"],
        pl: 'nie ma sprawy',
        cz: '',
    },
    {
        en: ['house keys'],
        pl: 'klucze do domu',
        cz: '',
    },
    {
        en: ['thanks, sweetie', 'thank you, honey'],
        pl: 'dziękuję, kochanie',
        cz: '',
    },
    {
        en: ['clever'],
        pl: 'mądry, sprytny',
        cz: '',
    },
    {
        en: ['friendly'],
        pl: 'przyjazny',
        cz: '',
    },
    {
        en: ['funny'],
        pl: 'wesoły',
        cz: '',
    },
    {
        en: ['helpful'],
        pl: 'pomocny',
        cz: '',
    },
    {
        en: ['nice'],
        pl: 'miły',
        cz: '',
    },
    {
        en: ['sporty'],
        pl: 'wysportowany',
        cz: '',
    },
    {
        en: ['always'],
        pl: 'zawsze',
        cz: '',
    },
    {
        en: ['answer'],
        pl: 'odpowiedź',
        cz: '',
    },
    {
        en: ['dance', 'dancing'],
        pl: 'taniec',
        cz: '',
    },
    {
        en: ['good at'],
        pl: 'dobry w/z',
        cz: '',
    },
    {
        en: ['good student'],
        pl: 'dobry uczeń',
        cz: '',
    },
    {
        en: ['group'],
        pl: 'grupa',
        cz: '',
    },
    {
        en: ['hobby'],
        pl: 'hobby',
        cz: '',
    },
    {
        en: ['homework'],
        pl: 'zadanie domowe',
        cz: '',
    },
    {
        en: ['how many'],
        pl: 'ile',
        cz: '',
    },
    {
        en: ['joke'],
        pl: 'dowcip',
        cz: '',
    },
    {
        en: ['kind'],
        pl: 'uprzejmy',
        cz: '',
    },
    {
        en: ['person'],
        pl: 'osoba',
        cz: '',
    },
    {
        en: ['personality'],
        pl: 'osobowość',
        cz: '',
    },
    {
        en: ['place'],
        pl: 'miejsce',
        cz: '',
    },
    {
        en: ['reading'],
        pl: 'czytanie',
        cz: '',
    },
    {
        en: ['room'],
        pl: 'pokój',
        cz: '',
    },
    {
        en: ['say'],
        pl: 'powiedzieć',
        cz: '',
    },
    {
        en: ['sometimes'],
        pl: 'czasami',
        cz: '',
    },
    {
        en: ['speak to'],
        pl: 'rozmawiać z',
        cz: '',
    },
    {
        en: ['subject'],
        pl: 'przedmiot',
        cz: '',
    },
    {
        en: ['usually'],
        pl: 'zazwyczaj',
        cz: '',
    },
]

export const test = testTrimer(unit4)
