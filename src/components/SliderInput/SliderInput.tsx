import { Box, Slider, Theme, Typography } from '@mui/material'
import { MathRangeType } from 'contexts/MathContext/MathContextTypes'

export type SliderValueType = number | MathRangeType

export interface IInputFieldProps {
    value: SliderValueType
    setValue: React.Dispatch<React.SetStateAction<SliderValueType>>
    label: string
    maxValue?: number
    minValue?: number
    minDistance?: number
    scale?: (value: number) => number
}
const SliderInput: React.FC<IInputFieldProps> = ({
    value,
    setValue,
    label,
    maxValue,
    minValue,
    minDistance,
    scale,
}) => {
    const handleChange = (event: Event, newValue: number | number[], activeThumb: number): void => {
        if (!Array.isArray(newValue)) {
            setValue(newValue)
            return
        }

        if (newValue[1] - newValue[0] < (minDistance ?? 2)) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], (maxValue ?? 100) - (minDistance ?? 2))
                setValue([clamped, clamped + (minDistance ?? 2)])
            } else {
                const clamped = Math.max(newValue[1], minDistance ?? 2)
                setValue([clamped - (minDistance ?? 2), clamped])
            }
        } else {
            setValue(newValue as [number, number])
        }
    }

    return (
        <Box
            sx={(theme: Theme) => {
                return {
                    width: '100%',
                    marginTop: '30px',
                    position: 'relative',
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: '5px',
                    '&:hover .MuiTypography-root': {
                        color: theme.palette.primary.main,
                    },
                }
            }}
        >
            <Typography
                variant='caption'
                sx={(theme: Theme) => {
                    return {
                        position: 'absolute',
                        top: '-11px',
                        color: theme.palette.text.secondary,
                        fontSize: '12px',
                        marginLeft: '9px',
                        paddingX: '5px',
                        backgroundColor: theme.palette.background.default,
                        transitionProperty: 'background, color',
                        transitionDuration: '0.5s',
                        transitionTimingFunction: 'linear',
                    }
                }}
            >
                {label}
            </Typography>
            <Slider
                valueLabelDisplay='on'
                max={maxValue ?? 100}
                min={minValue ?? 1}
                // getAriaLabel={() => 'Minimum distance shift'}
                value={value}
                onChange={handleChange}
                // getAriaValueText={valuetext}
                disableSwap
                scale={scale}
                sx={{
                    margin: '55px 30px 0 30px',
                    width: 'calc(100% - 60px)',
                    color: '#52af77',
                    height: 12,
                    '& .MuiSlider-track': {
                        border: 'none',
                    },
                    '& .MuiSlider-thumb': {
                        height: 26,
                        width: 26,
                        backgroundColor: '#fff',
                        border: '2px solid currentColor',
                        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                            boxShadow: 'inherit',
                        },
                        '&:before': {
                            display: 'none',
                        },
                    },
                    '& .MuiSlider-valueLabel': {
                        lineHeight: 1.5,
                        fontSize: 18,
                        background: 'unset',
                        padding: 0,
                        width: 36,
                        height: 36,
                        borderRadius: '50% 50% 50% 0',
                        backgroundColor: '#52af77',
                        transformOrigin: 'bottom left',
                        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
                        '&:before': { display: 'none' },
                        '&.MuiSlider-valueLabelOpen': {
                            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
                        },
                        '& > *': {
                            transform: 'rotate(45deg)',
                        },
                    },
                }}
            />
        </Box>
    )
}

export default SliderInput
