import SectionTitle from 'components/SectionTitle'
import { Link } from 'react-router-dom'

const EnglishSettings: React.FC = () => {
    return (
        <>
            <SectionTitle title='Ustawienia' />
            <Link to='/angielski/kolory'>Kolory</Link>
        </>
    )
}

export default EnglishSettings
