import { createTheme, Theme, ThemeProvider } from '@mui/material'
import { blue, green, grey, lightBlue } from '@mui/material/colors'
import { createContext, useMemo, useState } from 'react'
import { IThemeContext, ThemeMode, IThemeContextProvider } from './ThemeContextTypes'

// this declare module block allows to extend Theme object by custom variables
declare module '@mui/material/styles' {
    interface Theme {
        gradiend: string
        status: {
            danger: string
        }
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        gradiend?: string
        status?: {
            danger?: string
        }
    }
}

export const ThemeContext = createContext<IThemeContext>({
    toggleThemeMode: () => undefined,
    mode: ThemeMode.light,
})

export const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
    const [mode, setMode] = useState<ThemeMode>(
        localStorage.getItem('themeMode') === ThemeMode.dark ? ThemeMode.dark : ThemeMode.light
    )

    const themeMode = useMemo(
        () => ({
            toggleThemeMode: () => {
                setMode((prevMode) =>
                    prevMode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light
                )
            },
            mode,
        }),
        [mode]
    )

    const theme: Theme = useMemo(() => {
        const isModeLight = mode === ThemeMode.light
        return createTheme({
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 360,
                    md: 600,
                    lg: 900,
                    xl: 1200,
                },
            },
            palette: {
                mode: mode,
                primary: {
                    main: isModeLight ? green[800] : green['A100'],
                    // main: isModeLight ? '#f1356d' : '#eb4c7b', // previous version of red details
                },
                background: {
                    default: isModeLight ? lightBlue[50] : grey[900],
                    paper: isModeLight ? blue[100] : grey[800],
                },
                text: {
                    primary: isModeLight ? '#000' : '#fff',
                },
            },
            typography: {
                fontFamily: 'Quicksand',
            },
            shape: {
                borderRadius: '5px',
            },
            gradiend: isModeLight
                ? 'radial-gradient( circle farthest-corner at 7.2% 99.6%,  rgba(37,249,245,1) 0%, rgba(8,70,218,1) 90% );' // 'linear-gradient(135deg, rgba(3,0,255,1) 0%, rgba(0,125,255,1) 50%, rgba(0,215,255,1) 100%)'
                : 'radial-gradient( circle farthest-corner at 10% 20%,  rgba(37,145,251,0.98) 0.1%, rgba(0,7,128,1) 99.8% );', // : 'linear-gradient(135deg, rgba(4,0,60,1) 0%, rgba(4,2,156,1) 50%, rgba(0,125,255,1) 100%)',
            status: {
                danger: '#876586',
            },
        })
    }, [mode])

    return (
        <ThemeContext.Provider value={themeMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    )
}
