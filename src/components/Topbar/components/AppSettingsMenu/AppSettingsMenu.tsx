import { ChangeEvent, useContext, useState } from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
import { Box, IconButton, FormControl, NativeSelect, InputBase, Theme } from '@mui/material'
import { styled } from '@mui/system'
import { ThemeContext } from 'contexts/ThemeContext'
import AppContext from 'contexts/AppContext'
import { LanguageType, ThemeMode } from 'types/appTypes'
import { localStorageKeys } from 'utils/constants'

const AppSettingsMenu: React.FC = () => {
    const { appDispatch } = useContext(AppContext)
    const { mode, toggleThemeMode } = useContext(ThemeContext)
    const [language, setLanguage] = useState<string>(
        localStorage.getItem(localStorageKeys.app.LANGUAGE) ?? 'pl'
    )

    const handleThemeChange = () => {
        toggleThemeMode()
        localStorage.setItem(
            localStorageKeys.app.THEME_MODE,
            mode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light
        )
    }

    const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value)
        appDispatch({ type: 'setLanguage', value: e.target.value as LanguageType })
        localStorage.setItem(localStorageKeys.app.LANGUAGE, e.target.value)
    }

    const themeTooglerIconStyles = (theme: Theme) => {
        return {
            fontSize: '24px',
            color: theme.palette.primary.main,
            display: 'flex',
        }
    }

    const OptionStyled = styled('option')(({ theme }) => ({
        color: theme.palette.mode === ThemeMode.light ? '#444' : '#eee',
        backgroundColor: theme.palette.mode === ThemeMode.light ? '#eee' : '#777',
    }))

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <IconButton
                aria-label='themeToggle'
                onClick={handleThemeChange}
                sx={{ width: '43px', height: '43px' }}
            >
                {mode === ThemeMode.dark ? (
                    <DarkMode sx={themeTooglerIconStyles} />
                ) : (
                    <LightMode sx={themeTooglerIconStyles} />
                )}
            </IconButton>
            <FormControl sx={{ display: 'flex', flexDirection: 'row', width: '65px' }}>
                <NativeSelect
                    fullWidth
                    variant='standard'
                    value={language}
                    onChange={handleLanguageChange}
                    input={
                        <InputBase
                            sx={(theme: Theme) => {
                                return {
                                    margin: '0 0 0 2px',
                                    fontFamily: 'Quicksand',
                                    fontWeight: theme.typography.fontWeightBold,
                                    '& .MuiSvgIcon-root': { color: theme.palette.primary.main },
                                    '& .MuiInputBase-input': {
                                        color: theme.palette.primary.main,
                                        border: '0px',
                                        fontSize: 18,
                                        padding: '0px 35px 0px 12px',
                                        '&:focus': {
                                            border: '0px',
                                            backgroundColor: 'transparent',
                                        },
                                    },
                                }
                            }}
                        />
                    }
                >
                    <OptionStyled value='pl'>PL</OptionStyled>
                    <OptionStyled value='cz'>CZ</OptionStyled>
                </NativeSelect>
            </FormControl>
        </Box>
    )
}

export default AppSettingsMenu
