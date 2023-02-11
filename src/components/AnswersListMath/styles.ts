import { SxClassesType } from 'types/appTypes'

export const sxClasses: SxClassesType = {
    container: (theme) => ({
        mt: 0,
        padding: '2px 5px 5px 5px',
        boxShadow: theme.shadows[4],
    }),
    zeroTopMargin: (theme) => ({
        mt: theme.shape.marginTop,
    }),
    tableRow: (theme) => ({
        background: theme.palette.error.light,
    }),
    tableCell: {
        fontSize: { xs: '13px', sm: '17px' },
    },
    colorWhite: {
        color: 'white',
    },
}
