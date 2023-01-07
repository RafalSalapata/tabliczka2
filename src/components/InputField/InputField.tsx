import { TextField, Theme } from '@mui/material'
import { ChangeEvent } from 'react'

interface IInputFieldProps {
    value: string
    label: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const InputField: React.FC<IInputFieldProps> = ({ value, label, setValue }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <TextField
            type='text'
            variant='outlined'
            label={label}
            value={value}
            fullWidth
            onChange={handleChange}
            inputProps={{
                sx: { fontSize: '26px', height: '60px', paddingY: '0px' },
            }}
            sx={(theme: Theme) => {
                return {
                    mt: '30px',
                    lineHeight: '0px',
                    '& label.Mui-focused': {
                        color: theme.palette.primary.main,
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: theme.palette.primary.main,
                        },
                        // '&:hover fieldset': {
                        //     borderColor: 'yellow',
                        // },
                        // '&.Mui-focused fieldset': {
                        //     borderColor: 'green',
                        // },
                    },
                }
            }}
        />
    )
}

export default InputField
