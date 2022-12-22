import Routing from 'components/Routing'
import Navbar from 'components/Topbar'
import { Box } from '@mui/system'

function App() {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default',
            }}
        >
            <Navbar />
            <Routing />
        </Box>
    )
}

export default App
