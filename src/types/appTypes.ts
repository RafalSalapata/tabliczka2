export type SelectItem = {
    readonly itemValue: string
    readonly itemText: string
}

export const enum ThemeMode {
    light = 'light',
    dark = 'dark',
}

export type ThemeContextType = {
    toggleThemeMode: () => void
    mode: ThemeMode
}
