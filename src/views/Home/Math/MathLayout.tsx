import { MathContextProvider } from 'contexts/MathContext'
import { Outlet } from 'react-router-dom'

const MathLayout: React.FC = () => {
    return (
        <MathContextProvider>
            <Outlet />
        </MathContextProvider>
    )
}

export default MathLayout
