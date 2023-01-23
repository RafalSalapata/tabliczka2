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
                    fontSize: { xs: '30px', sm: '34px' },
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    transition: theme.customTransitions.onThemeChange,
                }
            }}
        >
            {title}
        </Typography>
    )
}

export default SectionTitle
