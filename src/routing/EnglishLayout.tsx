import { EnContextProvider } from 'contexts/EnContext'
import { Outlet } from 'react-router-dom'

const EnglishLayout: React.FC = () => {
    return (
        <EnContextProvider>
            <Outlet />
        </EnContextProvider>
    )
}

export default EnglishLayout
