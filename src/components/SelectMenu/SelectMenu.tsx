import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Theme } from '@mui/material'
import { SelectItem } from 'types/appTypes'

export interface ISelectMenuProps {
    value: string
    label: string
    setValue: (value: string) => void
    itemList: readonly SelectItem[]
}

const SelectMenu: React.FC<ISelectMenuProps> = ({ label, value, setValue, itemList }) => {
    const handleChange = (e: SelectChangeEvent<string>) => {
        setValue(e.target.value)
    }

    return (
        <FormControl
            fullWidth
            sx={(theme: Theme) => {
                return {
                    mt: theme.shape.marginTop,
                }
            }}
        >
            <InputLabel id='math-operation-select'>{label}</InputLabel>
            <Select
                labelId='math-operation-select'
                label={label}
                value={value}
                onChange={handleChange}
                inputProps={{
                    sx: {
                        fontSize: '26px',
                        paddingTop: '28px',
                    },
                }}
                sx={(theme: Theme) => {
                    return {
                        height: '60px',
                        transition: theme.customTransitions.onThemeChange,
                        '& label.Mui-focused': {
                            color: theme.palette.primary.main,
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main,
                        },
                        '& .MuiSvgIcon-root, .MuiFormLabel-root': {
                            transition: theme.customTransitions.onThemeChange,
                        },
                    }
                }}
            >
                {itemList.map((item) => {
                    return (
                        <MenuItem key={item.itemValue} value={item.itemValue}>
                            {item.itemText}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default SelectMenu
