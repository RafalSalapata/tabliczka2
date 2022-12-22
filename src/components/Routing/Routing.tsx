import { Box, Theme, Typography } from '@mui/material'
import Navigation from './Navigation'

const Routing = () => {
    return (
        <Box
            sx={(theme: Theme) => {
                return {
                    paddingX: theme.spacing(1.5),
                    paddingY: theme.spacing(0.5),
                    width: '100%',
                    maxWidth: '800px',
                }
            }}
        >
            <Navigation />
            <Typography color='textPrimary' variant='h2'>
                Main Content
            </Typography>
            <Typography variant='body1' color={(theme) => theme.palette.text.primary}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci
                repudiandae accusantium reiciendis asperiores dolorum quidem ullam deleniti nesciunt
                ab placeat expedita odio corporis quos necessitatibus optio, quisquam accusamus
                voluptas minima maiores facere! Suscipit voluptas, alias optio temporibus porro
                explicabo in quidem, labore minus natus, laudantium error? Consequatur, illum
                doloremque.
            </Typography>
            <Typography variant='body2' color={(theme) => theme.palette.text.primary}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci
                repudiandae accusantium reiciendis asperiores dolorum quidem ullam deleniti nesciunt
                ab placeat expedita odio corporis quos necessitatibus optio, quisquam accusamus
                voluptas minima maiores facere! Suscipit voluptas, alias optio temporibus porro
                explicabo in quidem, labore minus natus, laudantium error? Consequatur, illum
                doloremque.
            </Typography>
            <Typography variant='caption' color={(theme) => theme.palette.text.primary}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate adipisci
                repudiandae accusantium reiciendis asperiores dolorum quidem ullam deleniti nesciunt
                ab placeat expedita odio corporis quos necessitatibus optio, quisquam accusamus
                voluptas minima maiores facere! Suscipit voluptas, alias optio temporibus porro
                explicabo in quidem, labore minus natus, laudantium error? Consequatur, illum
                doloremque.
            </Typography>
        </Box>
    )
}

export default Routing
