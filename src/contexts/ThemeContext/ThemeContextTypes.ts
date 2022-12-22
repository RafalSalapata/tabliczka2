export const enum ThemeMode {
    light = 'light',
    dark = 'dark',
}

export interface IThemeContext {
    toggleThemeMode: () => void
    mode: ThemeMode
}

export interface IThemeContextProvider {
    children: JSX.Element
}
