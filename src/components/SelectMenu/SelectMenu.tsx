import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Theme } from '@mui/material'

export type SelectItem = {
    itemValue: string
    itemText: string
}

export interface ISelectMenuProps {
    value: string
    label: string
    setValue: React.Dispatch<React.SetStateAction<string>>
    itemList: SelectItem[]
}

const SelectMenu: React.FC<ISelectMenuProps> = ({ label, value, setValue, itemList }) => {
    const handleChange = (e: SelectChangeEvent<string>) => {
        setValue(e.target.value)
    }

    return (
        <FormControl fullWidth sx={{ mt: '30px' }}>
            <InputLabel id='math-operation-select'>{label}</InputLabel>
            <Select
                labelId='math-operation-select'
                label={label}
                value={value}
                onChange={handleChange}
                inputProps={{
                    sx: { fontSize: '26px', paddingTop: '28px' },
                }}
                sx={(theme: Theme) => {
                    return {
                        height: '60px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignContent: 'center',
                        '& label.Mui-focused': {
                            color: theme.palette.primary.main,
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main,
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignContent: 'center',
                        },
                        '& .MuiSelect-outlined': {
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignContent: 'center',
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
