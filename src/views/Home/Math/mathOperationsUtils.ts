import { SelectItem } from 'components/SelectMenu/SelectMenu'

interface Addition extends SelectItem {
    itemValue: 'addition'
    itemText: 'Dodawanie'
    path: 'dodawanie'
}

interface Subtraction extends SelectItem {
    itemValue: 'subtraction'
    itemText: 'Odejmowanie'
    path: 'odejmowanie'
}

interface Multiplication extends SelectItem {
    itemValue: 'multiplication'
    itemText: 'Mnożenie'
    path: 'mnozenie'
}

interface Division extends SelectItem {
    itemValue: 'division'
    itemText: 'Dzielenie'
    path: 'dzielenie'
}

export type BasicOperation = Addition | Subtraction | Multiplication | Division

export const mathOperations: BasicOperation[] = [
    { itemValue: 'addition', itemText: 'Dodawanie', path: 'dodawanie' },
    { itemValue: 'subtraction', itemText: 'Odejmowanie', path: 'odejmowanie' },
    { itemValue: 'multiplication', itemText: 'Mnożenie', path: 'mnozenie' },
    { itemValue: 'division', itemText: 'Dzielenie', path: 'dzielenie' },
]

export const sliderValueToTestLength = (value: number): number => {
    if (value <= 10) {
        return value
    } else if (value <= 15) {
        return 2 * (value - 10) + 10
    } else {
        return 5 * (value - 15) + 20
    }
}
