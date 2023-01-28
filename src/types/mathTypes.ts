import { SelectItem } from 'components/SelectMenu/SelectMenu'

interface Addition extends SelectItem {
    itemValue: 'addition'
    itemText: 'Dodawanie'
    path: 'dodawanie'
    sign: '+'
}

interface Subtraction extends SelectItem {
    itemValue: 'subtraction'
    itemText: 'Odejmowanie'
    path: 'odejmowanie'
    sign: '-'
}

interface Multiplication extends SelectItem {
    itemValue: 'multiplication'
    itemText: 'Mnożenie'
    path: 'mnozenie'
    sign: 'x'
}

interface Division extends SelectItem {
    itemValue: 'division'
    itemText: 'Dzielenie'
    path: 'dzielenie'
    sign: ':'
}

export type BasicOperation = Addition | Subtraction | Multiplication | Division

export const mathOperations: BasicOperation[] = [
    { itemValue: 'addition', itemText: 'Dodawanie', path: 'dodawanie', sign: '+' },
    { itemValue: 'subtraction', itemText: 'Odejmowanie', path: 'odejmowanie', sign: '-' },
    { itemValue: 'multiplication', itemText: 'Mnożenie', path: 'mnozenie', sign: 'x' },
    { itemValue: 'division', itemText: 'Dzielenie', path: 'dzielenie', sign: ':' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isBasicOperation = (arg: any): arg is BasicOperation => {
    const value = arg.itemValue
    const text = arg.itemText
    const path = arg.path
    const sign = arg.sign

    const isAddition =
        text === 'Dodawanie' && value === 'addition' && path === 'dodawanie' && sign === '+'
    const isSubtraction =
        text === 'Odejmowanie' && value === 'subtraction' && path === 'odejmowanie' && sign === '-'
    const isMultiplication =
        text === 'Mnożenie' && value === 'multiplication' && path === 'mnozenie' && sign === 'x'
    const isDivision =
        text === 'Dzielenie' && value === 'division' && path === 'dzielenie' && sign === ':'

    return isAddition || isSubtraction || isMultiplication || isDivision
}
