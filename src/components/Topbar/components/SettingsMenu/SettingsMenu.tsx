import { useContext } from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
import { Box, IconButton, FormControl, NativeSelect, InputBase, Theme } from '@mui/material'
import { ThemeContext } from 'contexts/ThemeContext/ThemeContext'
import { ThemeMode } from 'contexts/ThemeContext/ThemeContextTypes'
import { styled } from '@mui/system'

const SettingsMenu: React.FC = () => {
    const { mode, toggleThemeMode } = useContext(ThemeContext)

    const handleThemeChange = () => {
        toggleThemeMode()
        localStorage.setItem(
            'themeMode',
            mode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light
        )
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
                    defaultValue='pl'
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

export default SettingsMenu
