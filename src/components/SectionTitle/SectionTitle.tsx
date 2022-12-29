import { Theme, Typography } from '@mui/material'

interface ISectionTitleProps {
    title: string
}

const SectionTitle: React.FC<ISectionTitleProps> = ({ title }: ISectionTitleProps) => {
    return (
        <Typography
            variant='h4'
            sx={(theme: Theme) => {
                return {
                    mt: 0.5,
                    padding: '5px',
                    textAlign: 'center',
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    transitionProperty: 'background, color',
                    transitionDuration: '0.5s',
                    transitionTimingFunction: 'linear',
                }
            }}
        >
            {title}
        </Typography>
    )
}

export default SectionTitle