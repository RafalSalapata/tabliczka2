import { FormHelperText, TextField, Theme } from '@mui/material'
import { ChangeEvent } from 'react'

interface InputFieldProps {
    value: string
    label: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    error?: boolean
    helperText?: string
}

const InputField: React.FC<InputFieldProps> = ({ value, label, setValue, error, helperText }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <>
            <TextField
                error={error ?? false}
                type='text'
                variant='outlined'
                label={label}
                value={value}
                fullWidth
                onChange={handleChange}
                inputProps={{
                    sx: {
                        fontSize: '26px',
                        height: '60px',
                        paddingY: '0px',
                        transition: (theme: Theme) => theme.customTransitions.onThemeChange,
                    },
                }}
                sx={(theme: Theme) => ({
                    mt: theme.shape.marginTop,
                    lineHeight: '0px',
                    '& label.Mui-focused': {
                        color: error ? theme.palette.error.main : theme.palette.primary.main,
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: theme.palette.primary.main,
                        },
                        '&:hover fieldset': {
                            borderColor: theme.palette.primary.main,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: error ? theme.palette.error.main : '',
                        },
                    },
                    'MuiFormHelperText-root': {
                        margin: 0,
                        color: 'blue',
                        position: 'relative',
                        top: 0,
                    },
                })}
            />
            <FormHelperText
                sx={(theme: Theme) => ({
                    margin: 0,
                    height: '0px',
                    color: theme.palette.error.main,
                    fontSize: { xs: '11px', sm: '12px' },
                })}
            >
                {helperText ?? ''}
            </FormHelperText>
        </>
    )
}

export default InputField
